/* @flow */
var SelectCategoriesSide/*: Function */;

import CategoryItem from '../CategoryItem/category-item.jsx';

import MenuFilter from '../MenuFilter/menu-filter.jsx';

import './select-categories-side.less';

export default SelectCategoriesSide = function(props/*: any */)/*: HTMLElement */ {
  var apply, cancel, categoryItems, currentCategorySet, mode, reset, upd;
  ({upd, currentCategorySet, mode, reset, cancel, apply} = props);
  categoryItems = function() {
    var entries/*: Array<[string, any]> */;
    entries = Object.entries(props.categories.get());
    return entries.map(function(ent/*: Array<[string, mixed]> */) {
      var checked, label;
      ({label, checked} = ent[1]);
      return <CategoryItem id={ent[0]} {...{label, checked, upd, currentCategorySet, mode}} />;
    });
  };
  return <menu className={'select-categories select-categories_theme_1'}>
		<menu className='select-categories__items select-categories__items_theme_1'>
			{categoryItems()}
		</menu>
		<Show when={props.mode() === 'list'}>
			<MenuFilter {...{reset, cancel, apply}} />
		</Show>
	</menu>;
};
