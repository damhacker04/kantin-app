import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import { AuthProvider, useAuth } from "./Auth/AuthContext";
import "./App.css";
import Welcome from "./Pages/Welcome";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/login";
import Register from "./Pages/Register";
import HomePage from "./Pages/HomePage";
import HomePagePreLogin from "./Pages/HomePagePreLogin";
import Kantin from "./Pages/Kantin";
import KantinDetail from "./Pages/KantinDetail";
import Test from "./Pages/Test";
import CartPage from "./Pages/CartPage";
import StatusPesananPage from "./Pages/StatusPesananPage";
import { CartProvider } from "./CartContext";
import CheckoutPage from "./Pages/CheckoutPage";
import PaymentPage from "./Pages/PaymentPage";
import PaymentSuccessPage from "./Pages/PaymentSuccessPage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <AuthProvider>
      
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/StatusPesanan" element={<StatusPesananPage />} />
          <Route path="/test" element={<Test />} />
          <Route path="/Kantin" element={<Kantin />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/kantin/:id" element={<KantinDetail />} />
          <Route path="/HomePagePreLogin" element={<HomePagePreLogin />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/PaymentSuccess" element={<PaymentSuccessPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      
    </AuthProvider>
  );
}

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
};

export default App;
