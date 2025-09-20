import api from "./api";

export const authApi = {
  register: (email, password) => api.post("/auth/register", { email, password }),
  login: (email, password) => api.post("/auth/login/password", { email, password }),
  refresh: () => api.post("/auth/refresh"),
  logout: () => api.post("/auth/logout"),
  me: () => api.get("/auth/me")
};

export default authApi;
