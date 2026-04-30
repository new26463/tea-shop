import { useEffect, useState } from "react";

function WereWolf() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }, [isDark]);

  return (
    <div>
      เวลา: {isDark ? "กลางคืน" : "กลางวัน"} <br />
      หมาป่า: {!isDark ? "หมาป่าตื่น" : "หมาป่าหลับ"} <br />
      <button onClick={() => setIsDark((e) => !e)}> Toggle Dark</button>
    </div>
  );
}

export default WereWolf;
