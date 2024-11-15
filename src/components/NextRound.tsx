interface Props {
	nextRound: () => void;
}

export default function NextRound({ nextRound }: Props) {
	return (
		<div className="next-round-button">
			<button type="button" className="btn btn-light" onClick={nextRound}>
				Next Round
			</button>
		</div>
	);
}
