export const Ball = (color = "brown", borderSize = 4) => {

	const ballSize = 9;
	const boxShadow = 20;


	return /*html*/ `
<div class="ball flex items-center justify-center text-[cyan]
" style=" border: ${borderSize}px solid white; box-shadow: ${boxShadow}px ${boxShadow}px ${boxShadow}px black; background-color: ${color}; width: ${ballSize}rem; height: ${ballSize}rem">Test</div>

	`;
};