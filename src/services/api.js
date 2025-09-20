// import axios from "axios";

// const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

// const api = axios.create({
//   baseURL: API_BASE,
//   withCredentials: true
// });

// // simple interceptor that tries to refresh on 401 once
// let isRefreshing = false;
// api.interceptors.response.use(
//   (r) => r,
//   async (err) => {
//     const orig = err.config;
//     if (err.response?.status === 401 && !orig._retry) {
//       orig._retry = true;
//       if (!isRefreshing) {
//         isRefreshing = true;
//         try {
//           await axios.post(`${API_BASE}/auth/refresh`, {}, { withCredentials: true });
//         } catch (e) {
//           isRefreshing = false;
//           return Promise.reject(err);
//         }
//         isRefreshing = false;
//       }
//       return api(orig);
//     }
//     return Promise.reject(err);
//   }
// );

// export default api;

import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

const api = axios.create({
  baseURL: API_BASE,
  withCredentials: true,
});

// --- Request Interceptor: attach access token ---
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken"); // store token in localStorage (or sessionStorage)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

// --- Response Interceptor: auto-refresh token on 401 ---
let isRefreshing = false;
api.interceptors.response.use(
  (r) => r,
  async (err) => {
    const orig = err.config;
    if (err.response?.status === 401 && !orig._retry) {
      orig._retry = true;
      if (!isRefreshing) {
        isRefreshing = true;
        try {
          // refresh token
          const res = await axios.post(
            `${API_BASE}/auth/refresh`,
            {},
            { withCredentials: true }
          );

          const newToken = res.data?.data?.accessToken;
          if (newToken) {
            localStorage.setItem("accessToken", newToken);
            // retry the failed request with new token
            orig.headers.Authorization = `Bearer ${newToken}`;
          }
        } catch (e) {
          isRefreshing = false;
          return Promise.reject(err);
        }
        isRefreshing = false;
      }
      return api(orig);
    }
    return Promise.reject(err);
  }
);

export default api;

