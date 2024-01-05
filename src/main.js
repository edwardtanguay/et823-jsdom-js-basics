import { Ball } from './components/Ball';
import './style.css'

const title = "JavaScript Basics";

document.querySelector('#app').innerHTML = /*html*/ `

<h2 class="text-3xl mb-4">Title: ${title}</h2>

<div class="flex gap-2 flex-wrap">
${Ball('blue')}
${Ball()}
${Ball()}
${Ball('yellow')}
${Ball()}
${Ball()}
${Ball()}
${Ball('green')}
${Ball()}
${Ball()}
${Ball()}
</div>

`

