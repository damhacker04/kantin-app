import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        {/* Judul */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">WELCOME</h1>
          <p className="mt-2 text-gray-600">Ngantin Yuk!</p>
        </div>

        {/* Tombol */}
        <div className="flex flex-col space-y-4">
          <Link
            to="/login"
            className="rounded-lg bg-emerald-500 px-6 py-3 text-center text-white transition-colors hover:bg-emerald-600"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="rounded-lg bg-emerald-100 px-6 py-3 text-center text-emerald-700 transition-colors hover:bg-emerald-200"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
