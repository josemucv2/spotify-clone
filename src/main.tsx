import { createRoot } from "react-dom/client";
import "./assets/styles/globals.scss";

import { App } from "./app.tsx";

createRoot(document.getElementById("root")!).render(<App />);
