import { Ball } from "./Ball";

const balls = [
	{
		color: "yellow",
		borderSize: 8,
		text: "Hans"
	},
	{
		color: "orange",
		borderSize: 8,
		text: "Angela"
	},
	{
		color: "blue",
		borderSize: 8,
		text: "Roger"
	},
	{
		color: "black",
		borderSize: 8,
		text: "Patricia"
	}
];

export const BallSection = () => {
	return /*html*/ `
	<div class="flex gap-4 flex-wrap">
	${balls.map(ball => {
		return `${Ball(ball.color, ball.borderSize, ball.text)}`;
	}).join('')}
	</div>
	`;
};