import { Ball } from './components/Ball';
import { BallSection } from './components/BallSection';
import './style.css';

const title = "JavaScript Basics";

document.querySelector('#app').innerHTML = /*html*/ `

<h2 class="text-3xl mb-4">Title: ${title}</h2>

<div class="flex gap-4 flex-wrap">
	${Ball('blue', 8, "42")}
	${Ball('black', 4, "that's not black")}
	${Ball('purple')}
	${Ball('yellow')}
	${Ball()}
	${Ball('#111')}
	${Ball('#222')}
	${Ball('green')}
	${Ball('skyblue')}
	${Ball()}
	${Ball('orange', 1, "weekend")}
</div>
<section  class="border border-slate-600 mt-12 p-4 rounded">
	${BallSection()}
</section>

`

