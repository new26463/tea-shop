import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MemoizedComponent from "./learn-hook/MemoizedComponent.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Counter />

    <SimpleForm />

    <WereWolf />

    <TimerCounter />

    <FocusInput />

    <CounterWithRef /> */}

    {/* <ExpensiveComponent /> */}

    <MemoizedComponent />
  </StrictMode>,
);

// function onDelete(id: number) {
//   console.log(`Deleted ${id}!`);
//   alert(`Deleted ${id}!`);
// }
