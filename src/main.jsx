import { StrictMode }   from "react";
import { createRoot }   from "react-dom/client";
import App              from "./App";
import { CartProvider } from "./CartContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);
