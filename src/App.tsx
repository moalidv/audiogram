import { useState } from "react";
import "./App.css";
import buttons from "./store/data";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="container">
      <svg className="graph" width={"40%"} height={"40%"}>
        {buttons.map((btn, idx) => (
          <circle
            key={idx}
            cx={`${btn.x}%`}
            cy={`${btn.y}%`}
            r={"2"}
            fill={isClicked ? "red" : "black"}
            onClick={() => {
              if (btn.clicked) {
                setIsClicked(true);
                btn.clicked = false;
              } else {
                setIsClicked(false);
                btn.clicked = true;
              }
            }}
          />
        ))}
        {/* <circle cx={"10%"} cy={"0"} r={3} fill={"red"} />
        <circle cx={"20%"} cy={"0"} r={3} fill={"red"} />
        <circle cx={"30%"} cy={"0"} r={3} fill={"red"} />
        <circle cx={"40%"} cy={"0"} r={3} fill={"red"} />
        <circle cx={"50%"} cy={"0"} r={3} fill={"red"} />
        <circle cx={"60%"} cy={"0"} r={3} fill={"red"} />
        <circle cx={"70%"} cy={"0"} r={3} fill={"red"} />
        <circle cx={"80%"} cy={"0"} r={3} fill={"red"} />
        <circle cx={"90%"} cy={"0"} r={3} fill={"red"} />
        <circle cx={"100%"} cy={"0"} r={3} fill={"red"} /> */}
      </svg>
    </div>
  );
}

export default App;
