import useSound from "use-sound";
import click from "../assets/sounds/click.mp3";

interface Props {
	value: String;
	updateValue: () => void;
	hasWon: boolean;
}

export default function Square({ value, updateValue, hasWon }: Props) {
	const [playSound] = useSound(click, {
		volume: 0.8,
	});

	return (
		<>
			<button
				className="square btn-lg"
				onClick={() => {
					if (!hasWon) {
						console.log("clicked");
						updateValue();
						playSound();
					}
				}}
			>
				{value}
			</button>
		</>
	);
}
