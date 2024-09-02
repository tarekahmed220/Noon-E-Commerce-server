import express from "express";
import {
  addSubCategory,
  deleteSubCategory,
  getAllSubCategories,
  getSubCategory,
  updateSubCategory,
} from "./subcategory.controller.js";

const subCategoryRouters = express.Router();

subCategoryRouters.get("/getallsubcategories", getAllSubCategories);
subCategoryRouters.post("/addSubCategory", addSubCategory);
subCategoryRouters.put("/updateSubCategory/:id", updateSubCategory);
subCategoryRouters.delete("/deleteSubCategory/:id", deleteSubCategory);
subCategoryRouters.get("/getSubCategory/:id", getSubCategory);

export default subCategoryRouters;
