const Product = require("../models/Product")

 const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ products });
};

 const getProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.status(200).json({ product });
};

 const createProduct = async (req, res) => {
  const { name, price, quantity } = req.body;

  //create product
 
  const product = await Product.create({ name, price,quantity });

  //return product
  res.status(201).json({ product });
  
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json({ product });
};

 const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.status(200).json({ message: "product deleted successfully" });
};

module.exports={
    getProduct,
    getAllProducts,
    deleteProduct,
    createProduct,
    updateProduct,
}