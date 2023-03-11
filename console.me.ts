declare global {
	interface Console {
		me: () => void;
	}
}

const kindWords: string[] = [
	"You are doing great!",
	"You are doing amazing!",
	"You are doing wonderful!",
	"You are doing fantastic!",
	"Keep it up!",
	"Keep going!",
	"You will get there!",
	"Keep pushing!",
	"I know you can do it!",
	"I know it's hard, but you can do it!",
	"Donny loves you.",
	"Donny is proud of you.",
	"You're better off without them!",
	"You can get through this.",
	"There will be better days ahead.",
	"I believe in you!",
];

const kindEmojis: string[] = [
	"👍",
	"👏",
	"👌",
	"👊",
	"🙌",
	"🤘",
	"🤙",
	"❤️",
	"🧡",
	"💛",
	"💚",
	"💙",
	"💜",
	"💗",
	"🤗",
];

/**
 * People ask about program, but do they ever ask how you are?
 * we must must console each other through code
 *
 *  **Example**
 *  console.me();
 *  >>> 🤗 You are doing great!
 */
console.me = () => {
	// console.me clearly uses the most sophisticated SOTA machine learning algorithm to date
	const kindWord = randomFrom(kindWords);
	const kindEmoji = randomFrom(kindEmojis);
	console.log(kindEmoji, kindWord);
};

function randomFrom<T>(array: T[]) {
	return array[randomArrayIndex(array.length)];
}

function randomArrayIndex(length: number) {
	const randomBetween0andLength = Math.floor(Math.random() * length);
	// if Math.random() === 1, then we will get an out of bounds index
	// so clamp at the last index
	const clamp = Math.min(randomBetween0andLength, length - 1);
	return clamp;
}

export {};
