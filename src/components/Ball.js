export const Ball = (color = "brown") => {

	const ballSize = 9;

	return /*html*/ `
<div class="ball" style="background-color: ${color}; width: ${ballSize}rem; height: ${ballSize}rem"></div>

	`;
};