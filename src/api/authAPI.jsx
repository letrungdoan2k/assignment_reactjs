import axios from "axios";
import instance from "./instance";

export const signup = (user) => {
  axios.defaults.withCredentials = true;
  const url = "/signup";
  return instance.post(url, user, {headers: { 
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    // 'X-CSRFToken': `Enter CSR Token here`
}})
};

export const signin = (user) => {
  const url = "/signin";
  return instance.post(url, user);
};

export const logoutUer = () => {
  const url = "/logout";
  return instance.get(url);
};


export const detail = (user) => {
  const url = "/signin";
  return instance.post(url, user);
};
