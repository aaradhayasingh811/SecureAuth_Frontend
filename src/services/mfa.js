import api from "./api";

const mfaApi = {
  setup: () => api.post("/auth/mfa/setup"),
  verify: (payload) => api.post("/auth/mfa/verify", payload),
  generateBackupCodes: () => api.post("/auth/backup/generate"),
  consumeBackupCode: (userId, code) => api.post("/auth/backup/consume", { userId, code })
};

export default mfaApi;
