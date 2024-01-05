export const Ball = (idCode, backgroundColor = "brown", borderSize = 4, text = "") => {

	const ballSize = 9;
	const boxShadow = 20;
	let textColor = 'black';

	function getRandomNumber() {
		const randomDecimal = Math.random();
		const randomNumber = Math.floor(randomDecimal * 5) + 1;
		return randomNumber;
	}


	setTimeout(() => {

		const ballElem = document.querySelector('.ball' + idCode);
		// ballElem.style.width = '20rem';

		let count = 10;
		setInterval(() => {
			const rand = getRandomNumber();
			if (rand === 1) {
				count++;
			}
			ballElem.style.width = `${count}rem`;
			ballElem.style.height = `${count}rem`;
		}, 100);
	}, 0);


	// if (backgroundColor === 'black' || backgroundColor === '#111') {
	if (['black', '#111', '#222'].includes(backgroundColor)) {
		textColor = 'white';
	}

	return /*html*/ `
<div class="ball${idCode} ballMain flex items-center justify-center 
" style=" color:${textColor}; border: ${borderSize}px solid white; box-shadow: ${boxShadow}px ${boxShadow}px ${boxShadow}px black; background-color: ${backgroundColor}; width: ${ballSize}rem; height: ${ballSize}rem">${text}</div>

	`;
};