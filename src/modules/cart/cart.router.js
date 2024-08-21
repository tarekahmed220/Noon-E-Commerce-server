import express from "express";
import { addToCart, removeFromCart, updateCart } from "./cart.controller.js";
import { verifyToken } from "../middleWare/verifyToken.js";

const cartRoutes = express.Router();

cartRoutes.post("/addtocart", verifyToken, addToCart);
cartRoutes.put("/updatecart", verifyToken, updateCart);
cartRoutes.delete("/removefromcart/:productId", verifyToken, removeFromCart);

export default cartRoutes;
