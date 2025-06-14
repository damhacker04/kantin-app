import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import Header from "../Components/HeaderPreLogin";
import FormInput from "../Components/FormInput";

const Register = () => {
  const [formData, setFormData] = useState({
    nama_lengkap: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    setError("Password dan konfirmasi password tidak cocok");
    return;
  }

  try {
    const result = await register(
      formData.nama_lengkap,
      formData.username,
      formData.email,
      formData.password
    );

    if (result.success) {
      setSuccess(true);
      setTimeout(() => navigate("/login"), 2000);
    } else {
      setError(result.message);
    }
  } catch (err) {
    setError("Terjadi kesalahan tidak terduga.");
  }
};



  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-1 px-4">
        <div className="w-full max-w-md pb-4 md:border-2 rounded-2xl border-emerald-500">
          {/* Logo Section */}
          <div className="mt-4 mb-8 text-center">
            <h2 className="text-4xl font-bold text-emerald-500">NgantinYUK!</h2>
          </div>

          {/* Form Container */}
          <div className="p-6 bg-white">
            <h2 className="mb-6 text-xl font-bold text-center">
              Buat akun pertama Anda
            </h2>

            {error && (
              <p className="p-2 mb-4 text-red-500 bg-red-100 rounded">
                {error}
              </p>
            )}

            {success && (
              <p className="p-2 mb-4 text-green-500 bg-green-100 rounded">
                Pendaftaran berhasil! Mengarahkan ke halaman login...
              </p>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Full Name Input */}
              <FormInput
                name="nama_lengkap"
                placeholder="Nama lengkap"
                type="text"
                value={formData.nama_lengkap}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500"
                required
              />

              {/* Username Input */}
              <FormInput
                name="username"
                placeholder="Username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500"
                required
              />

              {/* Email Input */}
              <FormInput
                name="email"
                placeholder="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500"
                required
              />

              {/* Password Input */}
              <FormInput
                name="password"
                placeholder="Password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500"
                required
              />

              {/* Confirm Password Input */}
              <FormInput
                name="confirmPassword"
                placeholder="Konfirmasi password"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500"
                required
              />

              {/* Register Button */}
              <button
                type="submit"
                className="w-full p-3 font-semibold text-white transition-colors rounded-lg bg-emerald-500 hover:bg-emerald-600"
              >
                Daftar
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Sudah punya akun?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-emerald-600 hover:underline"
                >
                  Login disini
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
