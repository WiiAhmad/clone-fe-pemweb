import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json", // Add Accept header
  },
});

// Add a request interceptor to include the token in the headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Fetch product details by ID
export const getProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product details:", error.response || error.message);
    throw error;
  }
};

// Fetch all products
export const getAllProducts = async () => {
  try {
    const response = await api.get("/products/");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error.response || error.message);
    throw error;
  }
};

// Create a new product
export const createProduct = async (productData) => {
  try {
    console.log("Creating product with data:", productData); // Debugging log
    const headers = productData instanceof FormData
      ? { "Content-Type": "multipart/form-data" }
      : { "Content-Type": "application/json" };

    const response = await api.post("/products/", productData, { headers });
    return response.data;
  } catch (error) {
    console.error("Error creating product:", error.response || error.message);
    throw error;
  }
};

// Update an existing product by ID
export const updateProduct = async (id, productData) => {
  try {
    const response = await api.put(`/products/${id}/`, productData);
    return response.data;
  } catch (error) {
    console.error("Error updating product:", error.response || error.message);
    throw error;
  }
};

// Delete a product by ID
export const deleteProduct = async (id) => {
  try {
    const response = await api.delete(`/products/${id}/`);
    return response.data;
  } catch (error) {
    console.error("Error deleting product:", error.response || error.message);
    throw error;
  }
};

export default api;