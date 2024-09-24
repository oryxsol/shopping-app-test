import { Product } from "../models/product";
import { ProductArray } from "../types/productTypes";

// Function to fetch products from the API for server-side rendering
export async function fetchProducts(): Promise<ProductArray> {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products;
}

// Fetch single product by ID (used in modal interaction)
export async function fetchProductById(id: number): Promise<Product> {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();
  return product;
}
