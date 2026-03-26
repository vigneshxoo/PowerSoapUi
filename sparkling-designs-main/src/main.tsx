import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./styling-extension.css";
import IntroDashboard from "./pages/InterDashBoard.tsx";

createRoot(document.getElementById("root")!).render(<App />);
