import { useEffect, useState } from "react";
import "./App.css";
import { clickBtn } from "./store/buttonsSlice/buttonsSlice";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import RightDiagram from "./components/RightDiagram";
import LeftDiagram from "./components/LeftDiagram";

function App() {
	const dispatch = useAppDispatch();
	const { records } = useAppSelector((state) => state.buttons);

	const [selectedBtns, setSelectedBtns] = useState<string[]>([
		"10_null",
		"20_null",
		"30_null",
		"40_null",
		"50_null",
		"60_null",
		"70_null",
		"80_null",
		"90_null",
	]);
	const [drawable, setDrawable] = useState(false);

	console.log(selectedBtns, drawable);

	useEffect(() => {
		selectedBtns.forEach((item) => {
			if (item.split("_")[1] == "null") {
				return setDrawable(false);
			}
			setDrawable(true);
		});
	});
	return (
		<div className="container">
			<RightDiagram />
			<LeftDiagram />
		</div>
	);
}

export default App;
