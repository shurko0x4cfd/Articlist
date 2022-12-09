### @flow ###

import EditableCredits from '../EditableCredits/editable-credits.jsx'
import MenuSend from '../MenuSend/menu-send.jsx'
import './editable-article.less'


export default EditableArticle ###: Function ### = \
        (props ###: any ###) ###: HTMLElement ### ->

	{ modeSet, categories, send } = props

	<article className='editable-article article_theme_1 
			editable-article_theme_1 article_corner_rounded_3'>

			<EditableCredits title={props.title} author={props.author} />

			<textarea type='text'
					className='editable-article__body 
							editable-article__body_theme_1'
					value={props.text}
					placeholder='Start article writing there...' />

			<MenuSend {...{modeSet, categories, send}} />
	</article>
