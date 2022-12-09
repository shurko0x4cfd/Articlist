/* @flow */
var CategoriesList/*: Function */;

import Tag from '../Tag/tag.jsx';

import '../../shared.less';

import './list_theme_1.less';

export default CategoriesList = function(props/*: any */)/*: HTMLElement */ {
  var categoryTitle;
  categoryTitle = props.categoryTitle || <Tag category={{
    label: 'none'
  }} />;
  return <div className='categories-list'>
		<div className='categories-list__body  categories-list__body_theme_1'>
			<Tag label={categoryTitle} />
		</div>
	</div>;
};
