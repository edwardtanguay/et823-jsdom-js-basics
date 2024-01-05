export const Ball = (color = "red") => {

	const ballSize = 9;

	return /*html*/ `
<div class="ball" style="background-color: ${color}; width: ${ballSize}rem; height: ${ballSize}rem"></div>

	`;
};