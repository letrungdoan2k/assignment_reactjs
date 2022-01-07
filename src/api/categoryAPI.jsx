import instance from "./instance";

export const createCategory = (category) => {
    const url = "/admin/categories";
    return instance.post(url, category);
  };
  export const listCategory = () => {
    const url = "/client/categories";
    return instance.get(url);
  };
  export const readCategory = (id) => {
    const url = "/admin/categories/" + id;
    return instance.get(url);
  };
  export const removeCategory = (id) => {
    const url = "/admin/categories/remove/" + id;
    return instance.delete(url);
  };
  export const updateCategory = (category) => {
    const url = "/admin/categories/" + category.id;
    return instance.patch(url, category);
  };