import { useState } from "react";
function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div
      style={{
        backgroundColor: isDark ? "black" : "white",
      }}
    >
      <div className="thrla">
        <h1>{isDark ? "Dark Theme" : "Light Theme"}</h1>
        <button onClick={() => setIsDark(!isDark)}>
          Switch to {isDark ? "Light" : "Dark"} Theme
        </button>
      </div>
    </div>
  );
}
export default App;