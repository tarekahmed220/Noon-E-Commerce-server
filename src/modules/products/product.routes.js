import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  getSomeProducts,
  updateProduct,
} from "./product.controller.js";

const productRoutes = express.Router();

productRoutes.get("/getsomeproducts", getSomeProducts);
productRoutes.get("/getproduct/:id", getProduct);
productRoutes.get("/getallproducts", getAllProducts);
productRoutes.put("/updateproduct/:id", updateProduct);
productRoutes.delete("/deleteproduct/:id", deleteProduct);
productRoutes.post("/addproduct", createProduct);

export default productRoutes;
