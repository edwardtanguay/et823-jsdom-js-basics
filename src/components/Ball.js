export const Ball = (color = "brown", borderSize =4) => {

	const ballSize = 9;
	// const boxShadow = 5
	

	return /*html*/ `
<div class="ball" style=" border: ${borderSize}px solid white; box-shadow: 5px 5px 5px black; background-color: ${color}; width: ${ballSize}rem; height: ${ballSize}rem"></div>

	`;
};