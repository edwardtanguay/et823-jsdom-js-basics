import { Ball } from './components/Ball';
import { KidsNameTags } from './components/KidsNameTags';
import './style.css';

const title = "JavaScript Basics";

document.querySelector('#app').innerHTML = /*html*/ `

<h2 class="text-3xl mb-4">Title: ${title}</h2>

<div class="flex gap-4 flex-wrap">
	${Ball('001', 'black', 4, "that's not black")}
	${Ball('002', 'blue', 8, "42")}
	${Ball('003', 'purple')}
	${Ball('004', 'yellow')}
	${Ball('005',)}
	${Ball('006', '#111')}
	${Ball('007', '#222')}
	${Ball('008', 'green')}
	${Ball('009', 'skyblue')}
	${Ball('010',)}
	${Ball('011', 'orange', 1, "weekend")}
</div>
<!-- <section  class="border border-slate-600 mt-12 p-4 rounded">
	${KidsNameTags()}
</section> -->

`

