import React from "react";
import "./style.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date().toLocaleString());
  return (
    <div>
      <p>{count}</p>
      <p>{date}</p>
      <p>
        <button
          onClick={() => {
            setCount(count + 1);
            setDate(new Date().toLocaleString());
          }}
        >
          Contador
        </button>
      </p>
    </div>
  );
}
