import "./App.css";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { blockOtherBtns, toggleBtn } from "./store/freq250/freq250Slice";
import { clickBtn } from "./store/buttonsSlice/buttonsSlice";

function App() {
  const dispatch = useAppDispatch();
  const { records } = useAppSelector((state) => state.buttons);
  return (
    <div className="container">
      <svg className="graph" width={"40%"} height={"40%"}>
        {records.map((btn, idx) => (
          <circle
            className="circle"
            key={idx}
            cx={`${btn.x}%`}
            cy={`${btn.y}%`}
            r={btn.clicked && !btn.blocked ? "6" : "4"}
            fill={btn.clicked && !btn.blocked ? "red" : "black"}
            onClick={() => {
              dispatch(clickBtn(`${btn.x}_${btn.y}`));
              // dispatch(blockOtherBtns(btn.y));
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default App;
