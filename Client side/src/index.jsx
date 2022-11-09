/* @refresh reload */
import { render } from 'solid-js/web';
import { createSignal } from "solid-js";

import './index.css';
import Page from './Page';


const urlFetch = 'http://localhost:4000/web/index.php?r=article/index';

const start = data =>
	render(() => <Page data={data} />, document.getElementById('root'));

	// Init Загружаем первую страницу
$.ajax({
	url: urlFetch,
	method: 'GET',
	dataType: 'json',
}).done(start);
