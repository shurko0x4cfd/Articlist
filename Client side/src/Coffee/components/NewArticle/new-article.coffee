### @flow ###

import EditableArticle from '../EditableArticle/editable-article.jsx'
import './new-article.less'


export default NewArticle ###: Function ### = \
	(props ###: any ###) ###: HTMLElement ### ->

	{ text, title, author, modeSet, categories, send } = props

	<div className='new-article new-article_theme_1'>
		<div className='new-article__body new-article__body_theme_1'>
			<EditableArticle
				{...{ text, title, author, modeSet, categories, send }}
			/>
		</div>
	</div>

