import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Counter from "./style-component/Counter.tsx";
import Tailwind from "./style-component/Tailwind.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <ProfileCard /> */}
    {/* <ProfileCardCss /> */}
    <Counter />
    <Tailwind />
  </StrictMode>,
);

// function onDelete(id: number) {
//   console.log(`Deleted ${id}!`);
//   alert(`Deleted ${id}!`);
// }
