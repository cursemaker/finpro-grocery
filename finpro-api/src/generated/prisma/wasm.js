
/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */

Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.8.2
 * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
 */
Prisma.prismaVersion = {
  client: "6.8.2",
  engine: "2060c79ba17c6bb9f5823312b6f6b7f4a845738e"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  password: 'password',
  phoneNumber: 'phoneNumber',
  gender: 'gender',
  dateOfBirth: 'dateOfBirth',
  isEmailVerified: 'isEmailVerified',
  passwordResetCount: 'passwordResetCount',
  emailChangeCount: 'emailChangeCount',
  avatarImgUrl: 'avatarImgUrl',
  cldPublicId: 'cldPublicId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.UserAddressScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  address: 'address',
  subDistrict: 'subDistrict',
  district: 'district',
  city: 'city',
  province: 'province',
  postalCode: 'postalCode',
  latitude: 'latitude',
  longitude: 'longitude',
  isMainAddress: 'isMainAddress',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.StoreScalarFieldEnum = {
  id: 'id',
  name: 'name',
  address: 'address',
  subDistrict: 'subDistrict',
  district: 'district',
  city: 'city',
  province: 'province',
  postalCode: 'postalCode',
  latitude: 'latitude',
  longitude: 'longitude',
  phoneNumber: 'phoneNumber',
  email: 'email',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.AdminScalarFieldEnum = {
  id: 'id',
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  password: 'password',
  phoneNumber: 'phoneNumber',
  role: 'role',
  isEmailVerified: 'isEmailVerified',
  passwordResetCount: 'passwordResetCount',
  emailChangeCount: 'emailChangeCount',
  avatarImgUrl: 'avatarImgUrl',
  cldPublicId: 'cldPublicId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  storeId: 'storeId'
};

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug',
  description: 'description',
  brandId: 'brandId',
  price: 'price',
  productSubCategoryId: 'productSubCategoryId',
  sku: 'sku',
  barcode: 'barcode',
  plu: 'plu',
  bpomId: 'bpomId',
  weight: 'weight',
  dimensions: 'dimensions',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.ProductImageScalarFieldEnum = {
  id: 'id',
  productId: 'productId',
  imageUrl: 'imageUrl',
  cldPublicId: 'cldPublicId',
  isMainImage: 'isMainImage',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.ProductBrandScalarFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug',
  description: 'description',
  logoUrl: 'logoUrl',
  cldPublicId: 'cldPublicId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.ProductCategoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.ProductSubCategoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  productCategoryId: 'productCategoryId'
};

exports.Prisma.ProductStockScalarFieldEnum = {
  productId: 'productId',
  storeId: 'storeId',
  stock: 'stock',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.ProductStockHistoryScalarFieldEnum = {
  id: 'id',
  productId: 'productId',
  storeId: 'storeId',
  quantity: 'quantity',
  type: 'type',
  reference: 'reference',
  notes: 'notes',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.ProductDiscountScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  discountType: 'discountType',
  discountValue: 'discountValue',
  minPurchaseValue: 'minPurchaseValue',
  maxDiscountValue: 'maxDiscountValue',
  startDate: 'startDate',
  endDate: 'endDate',
  isActive: 'isActive',
  isGlobalProduct: 'isGlobalProduct',
  productId: 'productId',
  storeId: 'storeId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.CartScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.CartItemScalarFieldEnum = {
  id: 'id',
  cartId: 'cartId',
  productId: 'productId',
  storeId: 'storeId',
  quantity: 'quantity',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.OrderScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  storeId: 'storeId',
  totalAmount: 'totalAmount',
  shippingAddressId: 'shippingAddressId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.OrderItemScalarFieldEnum = {
  id: 'id',
  orderId: 'orderId',
  productId: 'productId',
  storeId: 'storeId',
  quantity: 'quantity',
  originalPrice: 'originalPrice',
  finalPrice: 'finalPrice',
  discountId: 'discountId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.OrderHistoryScalarFieldEnum = {
  id: 'id',
  orderId: 'orderId',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.PaymentScalarFieldEnum = {
  id: 'id',
  orderId: 'orderId',
  paymentType: 'paymentType',
  paymentStatus: 'paymentStatus',
  paymentMethod: 'paymentMethod',
  paymentAmount: 'paymentAmount',
  paymentDate: 'paymentDate',
  isVerified: 'isVerified',
  verifiedBy: 'verifiedBy',
  verifiedAt: 'verifiedAt',
  notes: 'notes',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.PaymentProofScalarFieldEnum = {
  id: 'id',
  transactionId: 'transactionId',
  imageUrl: 'imageUrl',
  cldPublicId: 'cldPublicId',
  status: 'status',
  verifiedBy: 'verifiedBy',
  verifiedAt: 'verifiedAt',
  notes: 'notes',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.AdminRole = exports.$Enums.AdminRole = {
  SuperAdmin: 'SuperAdmin',
  Admin: 'Admin'
};

exports.StockMovementType = exports.$Enums.StockMovementType = {
  STORE_IN: 'STORE_IN',
  STORE_OUT: 'STORE_OUT',
  SALE: 'SALE',
  ADJUSTMENT: 'ADJUSTMENT'
};

exports.DiscountType = exports.$Enums.DiscountType = {
  PERCENTAGE: 'PERCENTAGE',
  FIXED_AMOUNT: 'FIXED_AMOUNT',
  BUY1_GET1: 'BUY1_GET1',
  MIN_PURCHASE: 'MIN_PURCHASE'
};

exports.CartItemStatus = exports.$Enums.CartItemStatus = {
  ACTIVE: 'ACTIVE',
  ORDERED: 'ORDERED',
  REMOVED: 'REMOVED'
};

exports.OrderStatus = exports.$Enums.OrderStatus = {
  WAITING_FOR_PAYMENT: 'WAITING_FOR_PAYMENT',
  WAITING_FOR_CONFIRMATION: 'WAITING_FOR_CONFIRMATION',
  PROCESSING: 'PROCESSING',
  DELIVERING: 'DELIVERING',
  CONFIRMED: 'CONFIRMED',
  CANCELED: 'CANCELED'
};

exports.PaymentType = exports.$Enums.PaymentType = {
  BANK_TRANSFER: 'BANK_TRANSFER',
  PAYMENT_GATEWAY: 'PAYMENT_GATEWAY'
};

exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
};

exports.Prisma.ModelName = {
  User: 'User',
  UserAddress: 'UserAddress',
  Store: 'Store',
  Admin: 'Admin',
  Product: 'Product',
  ProductImage: 'ProductImage',
  ProductBrand: 'ProductBrand',
  ProductCategory: 'ProductCategory',
  ProductSubCategory: 'ProductSubCategory',
  ProductStock: 'ProductStock',
  ProductStockHistory: 'ProductStockHistory',
  ProductDiscount: 'ProductDiscount',
  Cart: 'Cart',
  CartItem: 'CartItem',
  Order: 'Order',
  OrderItem: 'OrderItem',
  OrderHistory: 'OrderHistory',
  Payment: 'Payment',
  PaymentProof: 'PaymentProof'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
