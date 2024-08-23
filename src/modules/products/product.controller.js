import productModel from "../../../db/models/product.model.js";
import subCategoryModel from "../../../db/models/subCategory.model.js";
import catchErrors from "../middleWare/handleErrors.js";

const getAllProducts = catchErrors(async function (req, res) {
  const condition = {};
  const {subCategoryId,keyword} = req.query


  if(subCategoryId){
    condition.subCategoryId = subCategoryId;
  }
  if(keyword){
    condition.name =  { $regex: '.*' + keyword + '.*' } 
  }
  const products = await productModel.find(condition).populate("subCategoryId");
  res.json({ products });
});

const createProduct = catchErrors(async function (req, res) {
  const { category, subCategory, itemName, price, onSale } = req.body;
  const newProduct = await productModel.insertOne(req.body);
  res.status(201).json({ newProduct });
});

const getProduct = catchErrors(async function (req, res) {
  const product = await productModel.findById(req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json({ product });
});

const getSomeProducts = catchErrors(async function (req, res) {
  const subCategories = await subCategoryModel.find().select("_id name");
  const products = [];
  for await (const subCategory of subCategories) {
    const subCategoryProducts = await productModel
      .find({
        subCategoryId: subCategory._id.toString(),
      })
      .limit(18);

    products.push({
      subCategoryName: subCategory.name,
      products: subCategoryProducts,
    });
  }

  res.json(products);
});


const deleteProduct = catchErrors(async function (req, res) {
  const deletedProduct = await productModel.findByIdAndDelete(req.params.id);
  if (!deletedProduct)
    return res.status(404).json({ message: "Product not found" });
  res.json({ message: "Product deleted successfully" });
});

const updateProduct = catchErrors(async function (req, res) {
  const updatedProduct = await productModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  if (!updatedProduct)
    return res.status(404).json({ message: "Product not found" });
  res.json({ message: "Updated Successfully", updatedProduct });
});

export {
  createProduct,
  getAllProducts,
  getProduct,
  getSomeProducts,
  updateProduct,
  deleteProduct,
};
