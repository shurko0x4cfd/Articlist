/* @flow */
var Categories/*: Function */;

import './categories_theme_1.less';

import CategoriesList from '../CategoriesList/categories-list.jsx';

export default Categories = function(props/*: any */)/*: HTMLElement */ {
  return <fiiter className='categories categories_theme_1'>
		<div className='categories__header'>
			<h4>Categories:</h4>
		</div>
			<CategoriesList categoryTitle={props.categoryTitle} />
	</fiiter>;
};
