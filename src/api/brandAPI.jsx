import instance from "./instance";

export const createBrand = (brand) => {
    const url = "/admin/brands";
    return instance.post(url, brand);
  };
  export const listBrand = () => {
    const url = "/client/brands";
    return instance.get(url);
  };
  export const readBrand = (id) => {
    const url = "/admin/brands/" + id;
    return instance.get(url);
  };
  export const removeBrand = (id) => {
    const url = "/admin/brands/remove/" + id;
    return instance.delete(url);
  };
  export const updateBrand = (brand) => {
    const url = "/admin/brands/" + brand.id;
    return instance.patch(url, brand);
  };