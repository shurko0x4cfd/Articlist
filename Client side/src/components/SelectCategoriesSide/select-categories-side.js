/* @flow */
var SelectCategoriesSide/*: Function */;

import CategoryItem from '../CategoryItem/category-item.jsx';

import MenuFilter from '../MenuFilter/menu-filter.jsx';

import './select-categories-side.less';

export default SelectCategoriesSide = function(props/*: any */)/*: HTMLElement */ {
  var categoryItems, currentCategorySet, mode, upd;
  ({upd, currentCategorySet, mode} = props);
  categoryItems = function() {
    var entries/*: Array<[string, any]> */;
    entries = Object.entries(props.categories.get());
    return entries.map(function(ent/*: Array<any> */) {
      var checked, label;
      ({label, checked} = ent[1]);
      return <CategoryItem id={ent[0]} {...{label, checked, upd, currentCategorySet, mode}} />;
    });
  };
  return <Show when={props.draw()}>
		<menu className={'select-categories select-categories_theme_1'}>
			<menu className='select-categories__items_theme_1'>
				{categoryItems()}
			</menu>
			<Show when={props.mode() === 'list'}>
				<MenuFilter reset={props.reset} cancel={props.cancel} apply={props.apply} />
			</Show>
		</menu>
	</Show>;
};
