### @flow ###

import './menu-send.less'
import { ONLY } from 'raffinade'


export default MenuSend ###: Function ### = \
        (props ###: any ###) ###: HTMLElement ### ->

	handleSendClick = (evt ###: any ###) ###: void ### ->

			(article ###: Element ###)
			if !evt?.target?.parentElement?.parentNode?.parentNode
				return
			article = evt?.target?.parentNode?.parentNode?.parentNode;

			title ###: string ### = article
				.getElementsByClassName('credits__editable-title')[ONLY]?.value || '';

			author = article
				.getElementsByClassName('credits__editable-author-name')[ONLY].value;
			text = article.getElementsByTagName('textarea')[ONLY].value;
			categories = props.categories.get();
			ids = Object.keys(categories);

			category_id = '0';
			for id in ids
				if categories[id].checked
					category_id = id;

			category_title = categories[category_id] || {};
			category_title = category_title.label || 'none';

			if (category_title == 'none')
				category_id = '0';

			props.send(title, category_id, category_title, author, text);

			props.modeSet('list');

		<div className='menu-send menu-send_theme_1'>
			<div className='menu-send__buttons menu-send__buttons_theme_1'>
				<div className='menu-send__button_theme_1 
					menu-send__button-cancel_theme_1'
					onClick={() => props.modeSet('list')}>
						Cancel
				</div>
				<div className='menu-send__button_theme_1 
					menu-send__button-send_theme_1'
					onClick={handleSendClick}>
						Send
				</div>
			</div>
		</div>
