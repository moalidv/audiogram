export type StateProps = {
	records: {
		f: number;
		i: number;
		x: number;
		y: number;
		clicked: boolean;
		blocked: boolean;
	}[];
};

export const initialState: StateProps = {
	records: [
		{ f: 0.5, i: -5, x: 20, y: 0, clicked: false, blocked: false },
		{ f: 0.5, i: 0, x: 20, y: 4, clicked: false, blocked: false },
		{ f: 0.5, i: 5, x: 20, y: 8, clicked: false, blocked: false },
		{ f: 0.5, i: 10, x: 20, y: 12, clicked: false, blocked: false },
		{ f: 0.5, i: 15, x: 20, y: 16, clicked: false, blocked: false },
		{ f: 0.5, i: 20, x: 20, y: 20, clicked: false, blocked: false },
		{ f: 0.5, i: 25, x: 20, y: 24, clicked: false, blocked: false },
		{ f: 0.5, i: 30, x: 20, y: 28, clicked: false, blocked: false },
		{ f: 0.5, i: 35, x: 20, y: 32, clicked: false, blocked: false },
		{ f: 0.5, i: 40, x: 20, y: 36, clicked: false, blocked: false },
		{ f: 0.5, i: 45, x: 20, y: 40, clicked: false, blocked: false },
		{ f: 0.5, i: 50, x: 20, y: 44, clicked: false, blocked: false },
		{ f: 0.5, i: 55, x: 20, y: 48, clicked: false, blocked: false },
		{ f: 0.5, i: 60, x: 20, y: 52, clicked: false, blocked: false },
		{ f: 0.5, i: 65, x: 20, y: 56, clicked: false, blocked: false },
		{ f: 0.5, i: 70, x: 20, y: 60, clicked: false, blocked: false },
		{ f: 0.5, i: 75, x: 20, y: 64, clicked: false, blocked: false },
		{ f: 0.5, i: 80, x: 20, y: 68, clicked: false, blocked: false },
		{ f: 0.5, i: 85, x: 20, y: 72, clicked: false, blocked: false },
		{ f: 0.5, i: 90, x: 20, y: 76, clicked: false, blocked: false },
		{ f: 0.5, i: 95, x: 20, y: 80, clicked: false, blocked: false },
		{ f: 0.5, i: 100, x: 20, y: 84, clicked: false, blocked: false },
		{ f: 0.5, i: 105, x: 20, y: 88, clicked: false, blocked: false },
		{ f: 0.5, i: 110, x: 20, y: 92, clicked: false, blocked: false },
		{ f: 0.5, i: 115, x: 20, y: 96, clicked: false, blocked: false },
		{ f: 0.5, i: 120, x: 20, y: 100, clicked: false, blocked: false },
	],
};
