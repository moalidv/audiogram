export type StateProps = {
  next: boolean;
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
  next: false,
  records: [
    { f: 0.25, i: -5, x: 10, y: 0, clicked: false, blocked: false },
    { f: 0.25, i: 0, x: 10, y: 4, clicked: false, blocked: false },
    { f: 0.25, i: 5, x: 10, y: 8, clicked: false, blocked: false },
    { f: 0.25, i: 10, x: 10, y: 12, clicked: false, blocked: false },
    { f: 0.25, i: 15, x: 10, y: 16, clicked: false, blocked: false },
    { f: 0.25, i: 20, x: 10, y: 20, clicked: false, blocked: false },
    { f: 0.25, i: 20, x: 10, y: 24, clicked: false, blocked: false },
    { f: 0.25, i: 20, x: 10, y: 28, clicked: false, blocked: false },
    { f: 0.25, i: 35, x: 10, y: 32, clicked: false, blocked: false },
    { f: 0.25, i: 35, x: 10, y: 36, clicked: false, blocked: false },
    { f: 0.25, i: 35, x: 10, y: 40, clicked: false, blocked: false },
    { f: 0.25, i: 50, x: 10, y: 44, clicked: false, blocked: false },
    { f: 0.25, i: 55, x: 10, y: 48, clicked: false, blocked: false },
    { f: 0.25, i: 60, x: 10, y: 52, clicked: false, blocked: false },
    { f: 0.25, i: 65, x: 10, y: 56, clicked: false, blocked: false },
    { f: 0.25, i: 70, x: 10, y: 60, clicked: false, blocked: false },
    { f: 0.25, i: 75, x: 10, y: 64, clicked: false, blocked: false },
    { f: 0.25, i: 80, x: 10, y: 68, clicked: false, blocked: false },
    { f: 0.25, i: 85, x: 10, y: 72, clicked: false, blocked: false },
    { f: 0.25, i: 90, x: 10, y: 76, clicked: false, blocked: false },
    { f: 0.25, i: 95, x: 10, y: 80, clicked: false, blocked: false },
    { f: 0.25, i: 100, x: 10, y: 84, clicked: false, blocked: false },
    { f: 0.25, i: 105, x: 10, y: 88, clicked: false, blocked: false },
    { f: 0.25, i: 110, x: 10, y: 92, clicked: false, blocked: false },
    { f: 0.25, i: 115, x: 10, y: 96, clicked: false, blocked: false },
    { f: 0.25, i: 120, x: 10, y: 100, clicked: false, blocked: false },
  ],
};
