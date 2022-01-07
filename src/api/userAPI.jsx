import instance from "./instance";

  export const listUser = () => {
    const url = "/admin/users";
    return instance.get(url);
  };
  export const readUser = (id) => {
    const url = "/admin/users/" + id;
    return instance.get(url);
  };
  export const removeUser = (id) => {
    const url = "/admin/users/remove/" + id;
    return instance.delete(url);
  };
  export const updateUser = (user) => {
    const url = "/admin/users/" + user.id;
    return instance.patch(url, user);
  };