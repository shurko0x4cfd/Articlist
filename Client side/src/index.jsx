/* @refresh reload */
import { render } from 'solid-js/web';
import { createSignal } from "solid-js";

import './index.css';
import Page from './Page';


const state =
{
	mode: 'list', // 'edit',
	selectCategoriesSide: 'unfolded',
	storedTitle: 'Enter new article name there',
	storedAuthorname: 'Enter your name there',
	storedText: '',
	addCategory:
		[
			{ id: 'id1', name: 'name1', label: 'Category 1', value: 'value1', checked: false },
			{ id: 'id2', name: 'name2', label: 'Category 2', value: 'value2', checked: true }
		],
	hasCategory:
		[
			{ id: 'id3', name: 'name3', label: 'Category 3', value: 'value3', checked: false },
			{ id: 'id4', name: 'name4', label: 'Category 4', value: 'value4', checked: true }
		],
}

const [stateGet, stateSet] = createSignal(state);

function switchMode(){
	const state = stateGet();

	if (state.mode === 'list')
		state.mode = 'edit';
	else
		state.mode = 'list';

	stateSet(state);
	console.log('.');
}

// const interval = setInterval(switchMode, 5000)


render(() => <Page />, document.getElementById('root'));
