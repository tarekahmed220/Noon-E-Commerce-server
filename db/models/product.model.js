import { Schema, model } from "mongoose";

const productSchema = new Schema({
  itemId: {
    type: "Number",
    required: true,
    unique: true,
  },
  itemName: {
    type: "String",
    required: true,
  },
  subCategoryId: {
    type: Schema.Types.ObjectId,
    ref: "subCategory",
    required: true,
  },
  img_url: {
    type: "String",
    required: true,
  },
  rate: {
    type: "Number",
    required: true,
  },
  price: {
    type: "Number",
    required: true,
  },
  onSale: {
    type: "Boolean",
    required: true,
  },
  priceBeforeSale: {
    type: "Number",
    required: false,
  },
});

export default model("product", productSchema);
