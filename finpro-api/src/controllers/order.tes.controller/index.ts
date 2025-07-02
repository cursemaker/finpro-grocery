import { prisma } from "../../prisma";
import { AppError } from "../../utils/app.error";
import { Request, Response, NextFunction } from "express";
import { getDistanceFromLatLonInKm } from "../../utils/haversine";

export const createOrderTes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.body.payload;
    const { shippingAddressId, storeId } = req.body;

    if (!userId || !shippingAddressId || !storeId) {
      throw new AppError("Missing required checkout fields", 400);
    }

    const store = await prisma.store.findUnique({
      where: { id: storeId },
      select: { latitude: true, longitude: true },
    });
    if (!store) throw new AppError("Store tidak ditemukan", 404);

    const address = await prisma.address.findUnique({
      where: { id: shippingAddressId },
      select: { latitude: true, longitude: true },
    });
    if (!address) throw new AppError("Alamat tidak ditemukan", 404);

    const storeLat = parseFloat(store.latitude);
    const storeLon = parseFloat(store.longitude);
    const userLat = parseFloat(address.latitude);
    const userLon = parseFloat(address.longitude);

    const distance = getDistanceFromLatLonInKm(storeLat, storeLon, userLat, userLon);
    const shippingCost = Math.ceil(distance) * 7000;
    const discountedShippingCost = 0;
    const finalShippingCost = shippingCost;

    const cart = await prisma.cart.findUnique({
      where: { userId },
      include: {
        cartItems: {
          where: { status: "ACTIVE", deletedAt: null, storeId },
          include: {
            productStock: {
              include: {
                product: {
                  include: {
                    productDiscountHistories: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    if (!cart || cart.cartItems.length === 0) throw new AppError("No items in cart for this store.", 400);

    const activeDiscounts = await prisma.productDiscount.findMany({
      where: { startDate: { lte: new Date() }, endDate: { gte: new Date() } },
    });
    const activeDiscountIds = activeDiscounts.map((d) => d.id);

    let totalAmount = 0;
    const orderItemsData = cart.cartItems.map((item) => {
      const product = item.productStock.product;
      const activeDiscountHistory = product.productDiscountHistories.find((history) =>
        activeDiscountIds.includes(history.discountId)
      );
      const discountValue = activeDiscountHistory?.discountValue ?? 0;
      const finalPrice = product.price - discountValue;

      if (item.quantity > item.productStock.stock) {
        throw new AppError(`Insufficient stock for product ID ${item.productId}`, 400);
      }
      totalAmount += finalPrice * item.quantity;

      return {
        productId: item.productId,
        storeId,
        quantity: item.quantity,
        originalPrice: product.price,
        discountedPrice: finalPrice,
        finalPrice,
        discountId: activeDiscountHistory?.discountId ?? null,
      };
    });

    const finalTotalAmount = totalAmount + finalShippingCost;

    const order = await prisma.$transaction(async (tx) => {
      const createdOrder = await tx.order.create({
        data: {
          userId,
          storeId,
          shippingAddressId,
          totalAmount,
          discountedTotalAmount: 0,
          finalTotalAmount,
          shippingCost,
          discountedShippingCost,
          finalShippingCost,
          orderItems: { create: orderItemsData },
          orderHistories: { create: { status: "WAITING_FOR_PAYMENT" } },
        },
      });

      await tx.cartItem.updateMany({
        where: { cartId: cart.id, storeId, status: "ACTIVE", deletedAt: null },
        data: { deletedAt: new Date(), status: "ORDERED" },
      });

      for (const item of cart.cartItems) {
        await tx.productStock.update({
          where: { productId_storeId: { productId: item.productId, storeId: item.storeId } },
          data: { stock: { decrement: item.quantity } },
        });
      }

      return createdOrder;
    });

    res.status(201).json({ success: true, message: "Order berhasil dibuat", data: order });
  } catch (error) {
    next(error);
  }
};