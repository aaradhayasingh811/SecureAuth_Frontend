import api from "./api";

const userApi = {
  me: () => api.get("/auth/me"),
  sessions: () => api.get("/auth/sessions"),
  revokeSession: (tokenId) => api.post("/auth/sessions/revoke", { tokenId })
};

export default userApi;
