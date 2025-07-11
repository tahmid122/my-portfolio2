import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/Router.jsx";
import DarkModeProvider from "./contexts/DarkModeProviders.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";
AOS.init();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeProvider>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
    </DarkModeProvider>
  </StrictMode>
);
