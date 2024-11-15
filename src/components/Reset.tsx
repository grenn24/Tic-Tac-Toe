interface Props {
	resetter: () => void;
}

export default function Reset({ resetter }: Props) {
	return (
		<div className="reset-button">
			<button type="button" className="btn btn-light" onClick={resetter}>
				Reset Game
			</button>
		</div>
	);
}
