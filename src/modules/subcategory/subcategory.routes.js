import express from "express";
import { getAllSubCategories } from "./subcategory.controller.js";



const subCategoryRouters = express.Router();

subCategoryRouters.get('/getallsubcategories', getAllSubCategories)


export default subCategoryRouters