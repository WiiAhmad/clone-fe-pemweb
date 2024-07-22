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

// Helper function to construct full image URL
const constructImageUrl = (imagePath) => {
  return imagePath ? `http://127.0.0.1:8000/storage/images/${imagePath}` : null;
};

// Fetch product details by ID
export const getProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}/`);
    const product = response.data;
    if (product.image) {
      product.image = constructImageUrl(product.image);
    }
    return product;
  } catch (error) {
    console.error("Error fetching product details:", error.response || error.message);
    throw error;
  }
};

// Fetch all products
export const getAllProducts = async () => {
  try {
    const response = await api.get("/products/");
    const products = response.data.map(product => {
      if (product.image) {
        product.image = constructImageUrl(product.image);
      }
      return product;
    });
    return products;
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
    console.log("Updating product with ID:", id); // Debugging log
    console.log("Product data:", productData); // Debugging log

    const headers = productData instanceof FormData
      ? { "Content-Type": "multipart/form-data" }
      : { "Content-Type": "application/json" };
    // Fetch the original product data before updating
    const originalProductResponse = await api.get(`/products/${id}/`);
    const originalProductData = originalProductResponse.data;
    console.log("Original product data:", originalProductData); // Debugging log
    // Update the product
    const response = await api.put(`/products/${id}/`, productData, { headers });
    // Fetch the updated product data after updating
    const updatedProductResponse = await api.get(`/products/${id}/`);
    const updatedProductData = updatedProductResponse.data;
    console.log("Updated product data:", updatedProductData); // Debugging log
    console.log("Response data:", response.data); // Debugging log
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
