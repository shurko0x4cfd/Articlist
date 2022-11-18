/* @refresh reload */
import { render } from 'solid-js/web';
import './index.css';
import Page from './Page';
import { ajax } from "./tools";


const start =
	xhr => {
		const text = xhr.responseText;
		const arrticles = JSON.parse(text);
		render(() => <Page articles={arrticles} />, document.getElementById('root'));
	};

// Init Загружаем первую страницу
ajax(start);
