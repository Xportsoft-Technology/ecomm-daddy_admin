import requests from "./httpService";

const ProductServices = {
  getAllProducts: async ({ page, limit, category, title, price }) => {
    const searchCategory = category !== null ? category : "";
    const searchTitle = title !== null ? title : "";
    const searchPrice = price !== null ? price : "";

    // return requests.get(
    //   `/products?page=${page}&limit=${limit}&category=${searchCategory}&title=${searchTitle}&price=${searchPrice}`
    // );
    return (
      { products: [{ _id: 1, title: { en: "Samsung" }, prices: { price: 120, discount: 10, originalPrice: 108 }, stock: 10, description: 'description', tag: 'none', category: { name: 'Phones' }, image: ['none'], status: 'none' }] }
    );
  },

  getProductById: async (id) => {
    // return requests.post(`/products/${id}`);  return (
    return ({ products: [{ id: 1, title: 'samsung', prices: { price: 120, discount: 10, originalPrice: 108 }, stock: 10, description: 'description', tag: 'none', category: { name: 'Phones' } }] }
    );
  },
  addProduct: async (body) => {
    return requests.post("/products/add", body);
  },
  addAllProducts: async (body) => {
    return requests.post("/products/all", body);
  },
  updateProduct: async (id, body) => {
    return requests.patch(`/products/${id}`, body);
  },
  updateManyProducts: async (body) => {
    return requests.patch("products/update/many", body);
  },
  updateStatus: async (id, body) => {
    return requests.put(`/products/status/${id}`, body);
  },

  deleteProduct: async (id) => {
    return requests.delete(`/products/${id}`);
  },
  deleteManyProducts: async (body) => {
    return requests.patch("/products/delete/many", body);
  },
};

export default ProductServices;
