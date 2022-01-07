import instance from "./instance";

export const createProduct = (product) => {
  const url = "/admin/products";
  return instance.post(url, product);
};
export const readProduct = (id) => {
  const url = "/admin/products/" + id;
  return instance.get(url);
};
export const removeProduct = (id) => {
  const url = "/admin/products/remove/" + id;
  return instance.delete(url);
};
export const updateProduct = (product) => {
  const url = "/admin/products/" + product.id;
  return instance.patch(url, product);
};

///--------------------- client

export const listProduct = (page) => {
  const url = "/client/products?page=" + page;
  return instance.get(url);
};
export const detailProduct = (id) => {
  const url = "/client/products/detail/" + id;
  return instance.get(url);
};

export const topSaleProduct = () => {
  const url = "/client/sale";
  return instance.get(url);
};
export const likeProduct = () => {
  const url = "/client/like";
  return instance.get(url);
};
export const relatedProducts = (id) => {
  const url = "/client/related/" + id;
  return instance.get(url);
};

export const searchProducts = (search) => {
  const url = "/client/product/search?keyword=" + search;
  return instance.get(url);
};
  // GET /product => Hien thi danh sach
  // GET /product/:id => Chi tiet san pham
  // POST /product => Them san pham
  // DELETE /product/:id => Xoa san pham
  // PATCH /product/:id => cap nhat san pham