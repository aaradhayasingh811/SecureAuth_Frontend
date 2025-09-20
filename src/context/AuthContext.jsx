import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const res = await api.get("/auth/me").catch(() => null);
        if (res && res.data?.ok && res.data.data?.user) {
          setUser(res.data.data.user);
        } else {
          setUser(null);
        }
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, []);

  const login = async (email, password) => {
    const res = await api.post("/auth/login/password", { email, password });
    if (res.data?.ok) {
      
      await fetchMe();
      return res.data.data;
    }
    throw new Error(res.data?.error?.message || "Login failed");
  };

  const register = async (email, password) => {
    const res = await api.post("/auth/register", { email, password });
    if (res.data?.ok) {
      return res.data.data;
    }
    throw new Error(res.data?.error?.message || "Registration failed");
  };

  const logout = async () => {
    await api.post("/auth/logout");
    setUser(null);
  };

  const fetchMe = async () => {
    try {
      const res = await api.get("/auth/me");
      if (res.data?.ok) setUser(res.data.data.user);
    } catch (e) {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, fetchMe }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
