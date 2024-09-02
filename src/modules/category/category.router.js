import express from "express";
import {
  addCategory,
  deleteCategory,
  getAllCategories,
  getCategory,
  updateCategory,
} from "./category.controller.js";

const categoryRouters = express.Router();

categoryRouters.post("/addcategory", addCategory);
categoryRouters.get("/getallcategories", getAllCategories);
categoryRouters.get("/getcategory", getCategory);
categoryRouters.delete("/deletecategory", deleteCategory);
categoryRouters.put("/updatecategory", updateCategory);

export default categoryRouters;
