import NextRound from "./NextRound";

interface Props {
	isX: boolean;
	hasWon?: boolean;
	nextRound: () => void;
}

export default function PlayerIndicator({ isX, hasWon = false, nextRound }: Props) {
	return (
		<div className="player-indicator">
			{hasWon ? null : (
				<h1 id="player-indicator">Next Player: {isX ? "X" : "O"}</h1>
			)}
			{hasWon ? (
				isX ? (
					<h1 className="winner">O has Won!</h1>
				) : (
					<h1 className="winner">X has Won!</h1>
				)
			) : null}
			{hasWon ? <NextRound nextRound={nextRound} /> : null}
		</div>
	);
}
