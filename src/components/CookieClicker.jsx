import { useState } from "react";
export default function CookieClicker() {
  const[score, setScore] = useState(0);

  return (
    <div className="cookie-clicker">
      <h2>Poeng: {score}</h2>
      <button onClick={() => setScore(score + 1)}>
        <img src="/cookie-1.png" alt="Kjeks" width={112} />
      </button>
    </div>
  );
}
