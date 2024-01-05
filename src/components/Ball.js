export const Ball = (backgroundColor = "brown", borderSize = 4) => {

	const ballSize = 9;
	const boxShadow = 20;
	let textColor = 'black';

	// if (backgroundColor === 'black' || backgroundColor === '#111') {
	if (['black', '#111', '#222'].includes(backgroundColor)) {
		textColor = 'white';
	}

	return /*html*/ `
<div class="ball flex items-center justify-center 
" style=" color:${textColor}; border: ${borderSize}px solid white; box-shadow: ${boxShadow}px ${boxShadow}px ${boxShadow}px black; background-color: ${backgroundColor}; width: ${ballSize}rem; height: ${ballSize}rem">Test</div>

	`;
};