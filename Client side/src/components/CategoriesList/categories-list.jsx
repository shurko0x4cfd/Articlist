/* @flow */
var CategoriesList/*: Function */;

import './categories-list_theme_1.less';

import '../shared/mixin-blocks/placer.less';

import Tag from '../Tag/tag.jsx';

export default CategoriesList = function(props/*: any */)/*: HTMLElement */ {
  var cNames, categoryTitle;
  cNames = ' placer__moveable_padding-left_8px ';
  categoryTitle = props.categoryTitle || <Tag category={{
    label: 'none'
  }} />;
  return <div className='categories-list categories-list_theme_1 placer'>
		<div className='categories-list__body categories-list__body_theme_1'>
			<Tag label={categoryTitle} {...{cNames}} />
		</div>
	</div>;
};
