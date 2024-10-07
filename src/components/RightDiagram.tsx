import { useEffect, useState } from "react";
import { clickBtn } from "../store/buttonsSlice/buttonsSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export const RightDiagram = ({}) => {
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

	useEffect(() => {
		selectedBtns.forEach((item) => {
			if (item.split("_")[1] == "null") {
				return setDrawable(false);
			}
			setDrawable(true);
		});
	});

	return (
		<div className="graph_container">
			<svg className="graph">
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
							setSelectedBtns((prev) => {
								const arr = prev.map((item) => {
									if (+item.split("_")[0] == btn.x && !btn.clicked) {
										return `${btn.x}_${btn.y}`;
									} else if (+item.split("_")[0] == btn.x && btn.clicked) {
										setDrawable(false);
										return `${btn.x}_null`;
									} else {
										setDrawable(false);
										return item;
									}
								});
								return arr;
							});
						}}
					/>
				))}
				{drawable &&
					selectedBtns?.map((btn, idx, elements) => {
						if (idx >= elements.length - 1) return;
						if (btn.split("_")[1] == "null") return;
						let nextBtn = elements[idx + 1];
						if (nextBtn.split("_")[1] == "null") return;
						console.log(btn, nextBtn);
						return (
							<line
								key={idx}
								x1={`${btn.split("_")[0]}%`}
								y1={`${btn.split("_")[1]}%`}
								x2={`${nextBtn.split("_")[0]}%`}
								y2={`${nextBtn.split("_")[1]}%`}
								strokeWidth={2}
								stroke="red"
							/>
						);
					})}
			</svg>
		</div>
	);
};

export default RightDiagram;
