// src/controllers/shipping/shippingCost.ts
import { Request, Response, NextFunction } from "express";
import axios from "axios";

export const getShippingCost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { origin, destination, weight, courier } = req.body;

    if (!origin || !destination || !weight || !courier) {
      res.status(400).json({ success: false, message: "Missing required fields." });
      return;
    }

    const response = await axios.post(
      "https://api.rajaongkir.com/starter/cost",
      {
        origin,
        destination,
        weight,
        courier,
      },
      {
        headers: {
          key: process.env.RAJA_ONGKIR_API_KEY!,
          "content-type": "application/x-www-form-urlencoded",
        },
      }
    );

    const results = response.data.rajaongkir.results[0]?.costs || [];

    res.status(200).json({
      success: true,
      message: "Shipping costs retrieved",
      data: results,
    });
  } catch (err) {
    next(err);
  }
};
