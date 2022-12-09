/* @flow */
var NewArticle/*: Function */;

import EditableArticle from '../EditableArticle/editable-article.jsx';

import './new-article.less';

export default NewArticle = function(props/*: any */)/*: HTMLElement */ {
  var author, categories, modeSet, send, text, title;
  ({text, title, author, modeSet, categories, send} = props);
  return <div className='new-article new-article_theme_1'>
		<div className='new-article__body new-article__body_theme_1'>
			<EditableArticle {...{text, title, author, modeSet, categories, send}} />
		</div>
	</div>;
};
