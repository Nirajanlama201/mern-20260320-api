import fs from "fs/promises";
import Product from "../models/Product.js";

const getAllProducts = async () => {
  const products = await fs.readFile("src/data/products.json", "utf8");

  return JSON.parse(products);
};

const getFirstProduct = async () => {
  const products = await fs.readFile("src/data/products.json", "utf8");

  const firstProduct = JSON.parse(products)[0];

  return firstProduct;
};

const getProductById = async (id) => {
  const products = await fs.readFile("src/data/products.json", "utf8");

  const list = JSON.parse(products);

  return list.find((product) => product.id == id);
};

const createProduct = async () => {
  return await Product.create({
    name: "Iphone 16 pro max",
    brand: "Apple",
    category: "Smartphones",
    price: 210000,
  });
};

export default {
  getAllProducts,
  getFirstProduct,
  getProductById,
  createProduct,
};
