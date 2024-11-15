interface Props {
	scoreX: number;
	scoreO: number;
}

export default function ScoreBoard({ scoreX, scoreO }: Props) {
	return (
		<>
			<div className="score-board">
				<h1>Score</h1>
				<h2>X: {scoreX}</h2>
				<h2>O: {scoreO}</h2>
			</div>
		</>
	);
}
