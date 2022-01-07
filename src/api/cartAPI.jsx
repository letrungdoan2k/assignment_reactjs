import instance from "./instance";

export const createCart = (cart) => {
    const url = "/carts";
    return instance.post(url, cart);
  };
  export const listCart = (id) => {
    const url = "/carts/" + id;
    return instance.get(url);
  };
  export const readCart = (id) => {
    const url = "/carts/" + id;
    return instance.get(url);
  };
  export const removeCart = (id) => {
    const url = "/carts/remove/" + id;
    return instance.delete(url);
  };
  export const updateCart = (cart) => {
    const url = "/carts/" + cart.id;
    return instance.patch(url, cart);
  };