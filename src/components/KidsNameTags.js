import { Ball } from "./Ball";
import kids from '../data/kids.json';

export const KidsNameTags = () => {
	return /*html*/ `
	<div class="flex gap-4 flex-wrap">
	${kids.map(kid => {
		return `${Ball(kid.color, kid.borderSize, kid.text)}`;
	}).join('')}
	</div>
	`;
};