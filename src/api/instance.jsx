import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:3001"
  
  baseURL: "http://127.0.0.1:8000/api",
  headers: { 
    // 'x-apikey': '59a7ad19f5a9fa0808f11931',
    // 'Access-Control-Allow-Origin' : '*',
    // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    // 'Content-Type': 'application/json',
    // 'X-Requested-With': 'XMLHttpRequest',
            //  'X-CSRFToken': `Enter CSR Token here`,
            withCredentials: true,
  }
});
export default instance;