/* @flow */
var Categories/*: Function */;

import CategoriesList from '../CategoriesList/categories-list.jsx';

import './categories-list_theme_1.less';

export default Categories = function(props/*: any */)/*: HTMLElement */ {
  return <fiiter className='categories categories_theme_1'>
		<div className='categories__header categories__header_theme_1'>
			<h4>Categories:</h4>
		</div>
			<CategoriesList categoryTitle={props.categoryTitle} />
	</fiiter>;
};
