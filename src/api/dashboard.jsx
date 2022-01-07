import instance from "./instance";

export const dashboard = () => {
    const url = "/admin/dashboard";
    return instance.get(url);
  };