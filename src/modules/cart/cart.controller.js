import cartModel from "../../../db/models/cart.model.js";
import productModel from "../../../db/models/product.model.js";
import catchErrors from "../middleWare/handleErrors.js";

const addToCart = catchErrors(async function (req, res) {
  let productId = req.body.productId;
  let userId = req.user.id;
  let quantity = req.body.quantity;
  let product = await productModel.findById(productId);
  if (!product) return res.status(404).json({ message: "Product not found" });
  let cartItem = await cartModel.findOne({ userId, productId });
  if (cartItem) {
    cartItem.quantity += quantity;
    await cartItem.save();
  } else {
    cartItem = new cartModel({ userId, productId, quantity });
    await cartItem.save();
  }

  res.json({ id: cartItem._id });
});

const removeFromCart = catchErrors(async function (req, res) {
  let productId = req.params.productId;
  let userId = req.user.id;
  let product = await productModel.findById(productId);
  if (!product) return res.status(404).json({ message: "Product not found" });
  await cartModel.findOneAndDelete({ userId, productId });
  res.json({ message: "success" });
});

const updateCart = catchErrors(async function (req, res) {
  let quantity = req.body.quantity;
  let productId = req.body.productId;
  let userId = req.user.id;
  let cart = await cartModel.findOne({ productId: productId, userId: userId });
  if (cart) {
    cart.quantity = quantity;
    await cart.save();
    res.json({ id: cart._id });
  } else {
    return res.status(404).json({ message: "Cart item not found" });
  }
});

export { addToCart, removeFromCart, updateCart };
