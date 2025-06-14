import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import Header from "../Components/HeaderPreLogin";
import FormInput from "../Components/FormInput";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

 const handleSubmit = async (e) => {
  e.preventDefault();

  const result = await login(username, password);
  console.log("Login result:", result); // Optional: debug

  if (result.success) {
    navigate("/HomePage");
  } else {
    setError(result.message);
  }
};

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-1 h-screen px-4">
        <div className="w-full max-w-md pb-4 md:border-2 rounded-2xl border-emerald-500">
          {/* Logo Section */}
          <div className="mt-8 mb-4 text-center">
            <h2 className="text-4xl font-bold text-emerald-500">NgantinYUK!</h2>
          </div>

          {/* Form Container */}
          <div className="p-6 bg-white">
            <h2 className="mb-6 text-xl font-bold text-center">
              Login Dulu Yuk
            </h2>

            {error && (
              <p className="p-2 mb-4 text-red-500 bg-red-100 rounded">
                {error}
              </p>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <FormInput
                placeholder="Masukkan username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500"
                required
              />
              <FormInput
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500"
                required
              />
              <button
                type="submit"
                className="w-full p-3 font-semibold text-white transition-colors rounded-lg bg-emerald-500 hover:bg-emerald-600"
              >
                Login
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Belum punya akun?{" "}
                <Link
                  to="/register"
                  className="font-semibold text-emerald-600 hover:underline"
                >
                  Daftar disini
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
