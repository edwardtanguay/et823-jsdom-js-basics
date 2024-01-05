export const Ball = (color = "brown") => {

	const ballSize = 9;

	return /*html*/ `
<div class="ball" style=" border: 2px solid white; background-color: ${color}; width: ${ballSize}rem; height: ${ballSize}rem"></div>

	`;
};