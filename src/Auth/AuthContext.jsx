import { createContext, useContext, useState, useEffect } from "react";

import axios from 'axios';

const AuthContext = createContext();

// Fungsi hash sederhana
const simpleHash = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
  }
  return hash.toString();
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  // Load data dari localStorage
  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    const storedUser = localStorage.getItem("currentUser");

    if (storedUsers) setUsers(JSON.parse(storedUsers));
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  // Simpan ke localStorage saat ada perubahan
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [users, user]);

 const register = async (nama_lengkap, username, email, password) => {
  try {
    // Ambil CSRF cookie dulu
    await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
      withCredentials: true,
    });

    // Kirim request register ke Laravel
    const response = await axios.post(
      "http://localhost:8000/api/pembeli/register",
      {
        nama_lengkap,
        username,
        email,
        password,
        password_confirmation: password,
      },
      {
        withCredentials: true,
      }
    );

    return {
      success: true,
      user: response.data.pembeli,
    };
  } catch (err) {
    console.log("🔥 Full Axios Error:", err);

    const fallbackMsg = "Terjadi kesalahan saat registrasi.";

    if (err?.response) {
      console.log("🚨 Axios response error:", err.response.data);
      return {
        success: false,
        message:
          err.response.data?.message ||
          JSON.stringify(err.response.data?.errors) ||
          fallbackMsg,
      };
    } else if (err?.request) {
      console.log("🚫 No response received:", err.request);
      return { success: false, message: "Server tidak merespon." };
    } else {
      console.log("❌ Unexpected Error:", err.message);
      return { success: false, message: err.message || fallbackMsg };
    }
  }
};


  const login = async (username, password) => {
  try {
    await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
      withCredentials: true,
    });

    const response = await axios.post(
      "http://localhost:8000/api/pembeli/login",
      {
        username,
        password,
      },
      {
        withCredentials: true,
      }
    );

    const user = response.data.pembeli;
    setUser(user);

    return { success: true };
  } catch (err) {
    console.error("🔥 Login error:", err);
    return {
      success: false,
      message:
        err.response?.data?.message || "Gagal login. Coba lagi nanti.",
    };
  }
};


  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        users,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
