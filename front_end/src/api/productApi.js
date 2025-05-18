import axios from "axios";

const API = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:3001"
      : "", // Replace with production backend URL when deployed
});

// Route prefix
const PRODUCTS_ROUTE = "/api/products";

// GET all products
export const getProducts = () => API.get(`${PRODUCTS_ROUTE}`);

// GET a single product by ID
export const getProduct = (id) => API.get(`${PRODUCTS_ROUTE}/${id}`);

// CREATE a new product
export const createProduct = (productData) => API.post(`${PRODUCTS_ROUTE}`, productData);

// UPDATE an existing product by ID
export const updateProduct = (id, updatedData) =>
  API.put(`${PRODUCTS_ROUTE}/${id}`, updatedData);

// DELETE a product by ID
export const deleteProduct = (id) => API.delete(`${PRODUCTS_ROUTE}/${id}`);
