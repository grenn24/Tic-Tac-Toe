import Square from "./Square";

interface Props {
	values: string[][];
	setValues: (x: string[][]) => void;
	isX: boolean;
	setIsX: (x: boolean) => void;
	hasWon: boolean;
}
export default function Board({ values, setValues, isX, setIsX, hasWon }: Props) {
	function updater(row: number, column: number) {
		function helper() {
			const valuesCopy = values.map((x) => x.slice(), values);
			if (valuesCopy[row][column] === "") {
				valuesCopy[row][column] = isX ? "X" : "O";
				setIsX(!isX);
			}
			setValues(valuesCopy);
		}
		return helper;
	}

	return (
		<>
			<div className="board">
				<div className="board-row">
					<Square
						value={values[0][0]}
						updateValue={updater(0, 0)}
						hasWon={hasWon}
					/>
					<Square
						value={values[0][1]}
						updateValue={updater(0, 1)}
						hasWon={hasWon}
					/>
					<Square
						value={values[0][2]}
						updateValue={updater(0, 2)}
						hasWon={hasWon}
					/>
				</div>
				<div className="board-row">
					<Square
						value={values[1][0]}
						updateValue={updater(1, 0)}
						hasWon={hasWon}
					/>
					<Square
						value={values[1][1]}
						updateValue={updater(1, 1)}
						hasWon={hasWon}
					/>
					<Square
						value={values[1][2]}
						updateValue={updater(1, 2)}
						hasWon={hasWon}
					/>
				</div>
				<div className="board-row">
					<Square
						value={values[2][0]}
						updateValue={updater(2, 0)}
						hasWon={hasWon}
					/>
					<Square
						value={values[2][1]}
						updateValue={updater(2, 1)}
						hasWon={hasWon}
					/>
					<Square
						value={values[2][2]}
						updateValue={updater(2, 2)}
						hasWon={hasWon}
					/>
				</div>
			</div>
		</>
	);
}
