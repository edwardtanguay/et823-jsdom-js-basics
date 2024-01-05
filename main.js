import './style.css'

const title = "JavaScript Basics";
const ballSize = 9;

document.querySelector('#app').innerHTML = /*html*/ `

<h2 class="text-3xl mb-4 text-red-500">Title: ${title}</h2>


<div class="ball" style="width: ${ballSize}rem; height: ${ballSize}rem"></div>
`

