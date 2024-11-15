interface Props {
    undoValues: () => void;
	hasWon: boolean;
}

export default function Undo({ undoValues, hasWon } : Props) {
    return (
			<div className="undo-button">
				<button type="button" className="btn btn-light" onClick={() => hasWon ? null : undoValues()}>
					Undo
				</button>
			</div>
		);
}