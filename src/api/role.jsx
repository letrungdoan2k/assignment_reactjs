import instance from "./instance";

export const createRole = (role) => {
    const url = "/admin/roles";
    return instance.post(url, role);
};
export const listRole = () => {
    const url = "/client/roles";
    return instance.get(url);
};