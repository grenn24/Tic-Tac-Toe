import { useState } from "react";
import Board from "./Board";
import PlayerIndicator from "./PlayerIndicator";
import Reset from "./Reset";
import Undo from "./Undo";
import ScoreBoard from "./ScoreBoard";

export default function main() {
	const [values, setValues] = useState([Array(3).fill(Array(3).fill(""))]);
	const [isX, setIsX] = useState(true);
	const [scoreX, setScoreX] = useState(0);
	const [scoreO, setScoreO] = useState(0);
	const [checkWinProcessed, setCheckWinProcessed] = useState(false);

	function checkWin(board: string[][]) {
		if (
			(board[0][0] === board[0][1] &&
				board[0][0] === board[0][2] &&
				board[0][0] !== "") ||
			(board[1][0] === board[1][1] &&
				board[1][0] === board[1][2] &&
				board[1][0] !== "") ||
			(board[2][0] === board[2][1] &&
				board[2][0] === board[2][2] &&
				board[2][0] !== "")
		) {
			if (!checkWinProcessed) {
				board[2][0] === "X" ? setScoreX(scoreX + 1) : setScoreO(scoreO + 1);
				setCheckWinProcessed(true);
			}
			return true;
		} else if (
			(board[0][0] === board[1][0] &&
				board[0][0] === board[2][0] &&
				board[0][0] !== "") ||
			(board[0][1] === board[1][1] &&
				board[0][1] === board[2][1] &&
				board[0][1] !== "") ||
			(board[0][2] === board[1][2] &&
				board[0][2] === board[2][2] &&
				board[0][2] !== "")
		) {
			if (!checkWinProcessed) {
				board[2][0] === "X" ? setScoreX(scoreX + 1) : setScoreO(scoreO + 1);
				setCheckWinProcessed(true);
			}
			return true;
		} else if (
			(board[0][0] === board[1][1] &&
				board[0][0] === board[2][2] &&
				board[0][0] !== "") ||
			(board[0][2] === board[1][1] &&
				board[0][2] === board[2][0] &&
				board[0][2] !== "")
		) {
			if (!checkWinProcessed) {
				board[2][0] === "X" ? setScoreX(scoreX + 1) : setScoreO(scoreO + 1);
				setCheckWinProcessed(true);
			}
			return true;
		} else {
			return false;
		}
	}

	function checkTie(board: string[][]) {
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				if (board[i][j] === "") {
					return false;
				}
			}
		}
		return true;
	}

	function addValue(x: string[][]) {
		const valueCopy = values.map((x) => x.map((y) => y.slice()));
		valueCopy[valueCopy.length] = x;
		setValues(valueCopy);
	}
	function resetter() {
		setValues([Array(3).fill(Array(3).fill(""))]);
		setScoreX(0);
		setScoreO(0);
		setCheckWinProcessed(false);
	}
	function nextRound() {
		setValues([Array(3).fill(Array(3).fill(""))]);
		setCheckWinProcessed(false);
	}
	function undoValues() {
		if (values.length > 1) {
			let valueCopy = values.map((x) => x.map((y) => y.slice()));
			valueCopy = valueCopy.slice(0, valueCopy.length - 1);
			setValues(valueCopy);
            setIsX(!isX);
		}
	}
	return (
		<>
			<main>
				<div className="flex-container-1">
					<ScoreBoard scoreX={scoreX} scoreO={scoreO} />
					<Board
						values={values[values.length - 1]}
						setValues={addValue}
						isX={isX}
						setIsX={setIsX}
						hasWon={checkWin(values[values.length - 1])}
					/>
					<PlayerIndicator
						isX={isX}
						hasWon={checkWin(values[values.length - 1])}
						hasTied={checkTie(values[values.length - 1])}
						nextRound={nextRound}
					/>
				</div>
				<br />
				<br />
				<div
					className="btn-group flex-container-2"
					role="group"
					aria-label="Basic example"
				>
					<Undo
						undoValues={undoValues}
						hasWon={checkWin(values[values.length - 1])}
					/>
					<Reset resetter={resetter} />
				</div>
			</main>
		</>
	);
}
