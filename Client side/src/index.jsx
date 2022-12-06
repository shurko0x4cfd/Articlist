/* @refresh reload */
import { render } from 'solid-js/web';
import Page from './Page';
import { ajax } from "./tools";
import { ONLY } from 'raffinade';


const start /*: Function */ =
	(xhr /*: any */) /*: void */ => {
		const text = xhr.responseText;
		const articles = JSON.parse(text);

		// Bad patch. To fix
		articles._meta.currentPage = articles._meta.currentPage.toString();

		render((v /*: void */) /*: Function */ => <Page {...{articles}} />,
		document.getElementsByClassName('articlist-root-el')[ONLY]);
	};

// Load first page
ajax(start);
