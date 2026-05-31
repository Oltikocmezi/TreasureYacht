import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  getAuthErrorMessage,
  getCurrentUser,
  login as loginUser,
  logout as logoutUser,
  register as registerUser,
  updateProfile as updateUserProfile,
} from "../services/authService";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadUser = useCallback(async () => {
    try {
      const nextUser = await getCurrentUser();
      setUser(nextUser);
      setError(null);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  const register = useCallback(async (payload) => {
    const data = await registerUser(payload);
    setUser(data.user);
    setError(null);
    return data;
  }, []);

  const login = useCallback(async (payload) => {
    const data = await loginUser(payload);
    setUser(data.user);
    setError(null);
    return data;
  }, []);

  const logout = useCallback(async () => {
    try {
      await logoutUser();
    } catch {
      // Session may already be gone
    }
    setUser(null);
  }, []);

  const updateProfile = useCallback(async (payload) => {
    const data = await updateUserProfile(payload);
    setUser(data.user);
    setError(null);
    return data;
  }, []);

  const value = useMemo(
    () => ({
      user,
      loading,
      error,
      setError,
      isAuthenticated: Boolean(user),
      register,
      login,
      logout,
      updateProfile,
      refreshUser: loadUser,
      getAuthErrorMessage,
    }),
    [user, loading, error, loadUser, register, login, logout, updateProfile]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
