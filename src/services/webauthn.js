import api from "./api";

const toBase64 = (arr) => btoa(String.fromCharCode(...new Uint8Array(arr)));

function bufferToBase64url(buffer) {
  return btoa(String.fromCharCode(...new Uint8Array(buffer)))
    .replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

const webauthnApi = {
  registerOptions: () => api.post("/auth/webauthn/register-options"),
  register: (credential) => api.post("/auth/webauthn/register", credential),
  loginOptions: (email) => api.post("/auth/webauthn/login-options", { email }),
  login: (credential) => api.post("/auth/webauthn/login", credential)
};

export default webauthnApi;
