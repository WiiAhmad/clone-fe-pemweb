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

    // Update the product
    const response = await api.post(`/products/${id}/`, productData, { headers });
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

// Update an existing activity by ID
export const updateActivity = async (id, activityData) => {
  try {
    console.log("Updating activity with ID:", id); // Debugging log
    console.log("Activity data:", activityData); // Debugging log

    const headers = activityData instanceof FormData
      ? { "Content-Type": "multipart/form-data" }
      : { "Content-Type": "application/json" };

    // Update the activity
    const response = await api.post(`/activities/${id}/`, activityData, { headers });
    console.log("Response data:", response.data); // Debugging log
    return response.data;
  } catch (error) {
    console.error("Error updating activity:", error.response || error.message);
    throw error;
  }
};

// Delete an activity by ID
export const deleteActivity = async (id) => {
  try {
    const response = await api.delete(`/activities/${id}/`);
    return response.data;
  } catch (error) {
    console.error("Error deleting activity:", error.response || error.message);
    throw error;
  }
};

// Update an existing testimoni by ID
export const updateTestimoni = async (id, testimoniData) => {
  try {
    console.log("Updating testimoni with ID:", id); // Debugging log
    console.log("Testimoni data:", testimoniData); // Debugging log

    const headers = testimoniData instanceof FormData
      ? { "Content-Type": "multipart/form-data" }
      : { "Content-Type": "application/json" };

    // Update the testimoni
    const response = await api.post(`/testimoni/${id}/`, testimoniData, { headers });
    console.log("Response data:", response.data); // Debugging log
    return response.data;
  } catch (error) {
    console.error("Error updating testimoni:", error.response || error.message);
    throw error;
  }
};

// Delete a testimoni by ID
export const deleteTestimoni = async (id) => {
  try {
    const response = await api.delete(`/testimoni/${id}/`);
    return response.data;
  } catch (error) {
    console.error("Error deleting testimoni:", error.response || error.message);
    throw error;
  }
};

// Fetch all activities
export const getAllActivities = async () => {
  try {
    const response = await api.get("/activities/");
    return response.data.map(activity => {
      if (activity.image) {
        activity.image = constructImageUrl(activity.image);
      }
      return activity;
    });
  } catch (error) {
    console.error("Error fetching activities:", error.response || error.message);
    throw error;
  }
};

// Fetch all testimonies
export const getAllTestimonies = async () => {
  try {
    const response = await api.get("/testimoni/");
    return response.data;
  } catch (error) {
    console.error("Error fetching testimonies:", error.response || error.message);
    throw error;
  }
};

// Fetch activity details by ID
export const getActivityById = async (id) => {
  try {
    const response = await api.get(`/activities/${id}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching activity details:", error.response || error.message);
    throw error;
  }
};

// Fetch testimoni details by ID
export const getTestimoniById = async (id) => {
  try {
    const response = await api.get(`/testimoni/${id}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching testimoni details:", error.response || error.message);
    throw error;
  }
};

// Create a new activity
export const createActivity = async (activityData) => {
  try {
    console.log("Creating activity with data:", activityData); // Debugging log
    const headers = activityData instanceof FormData
      ? { "Content-Type": "multipart/form-data" }
      : { "Content-Type": "application/json" };

    const response = await api.post("/activities/", activityData, { headers });
    return response.data;
  } catch (error) {
    console.error("Error creating activity:", error.response || error.message);
    throw error;
  }
};

// Create a new testimoni
export const createTestimoni = async (testimoniData) => {
  try {
    console.log("Creating testimoni with data:", testimoniData); // Debugging log
    const headers = testimoniData instanceof FormData
      ? { "Content-Type": "multipart/form-data" }
      : { "Content-Type": "application/json" };

    for(let [key, value] of testimoniData.entries()){
      console.log(`${key}: ${value}`);
    }

    const response = await api.post("/testimoni/", testimoniData, { headers });
    return response.data;
  } catch (error) {
    console.error("Error creating testimoni:", error.response || error.message);
    throw error;
  }
};

export default api;
