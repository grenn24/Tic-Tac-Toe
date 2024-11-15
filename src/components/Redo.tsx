interface Props {
    redoValues: () => void;
}

export default function Redo({ redoValues } : Props) {
    return (
			<div className="redo-button">
				<button type="button" className="btn btn-light" onClick={redoValues}>
					Undo
				</button>
			</div>
		);
}