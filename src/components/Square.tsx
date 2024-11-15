interface Props {
	value: String;
	updateValue: () => void;
	hasWon: boolean;
}

export default function Square({ value, updateValue, hasWon }: Props) {
	return (
		<button
			className="square btn-lg"
			onClick={() => {
				if (!hasWon) {
					console.log("clicked");
					updateValue();
				}
			}}
		>
			{value}
		</button>
	);
}
