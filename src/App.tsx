import "./App.css";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { blockColumnBtns, clickBtn } from "./store/buttonsSlice/buttonsSlice";

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
						r={btn.clicked ? "6" : "4"}
						fill={btn.clicked && !btn.blocked ? "red" : "black"}
						onClick={() => {
							dispatch(clickBtn(`${btn.x}_${btn.y}`));
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
