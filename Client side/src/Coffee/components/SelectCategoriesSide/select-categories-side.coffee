### @flow ###

import CategoryItem from '../CategoryItem/category-item.jsx'
import MenuFilter from '../MenuFilter/menu-filter.jsx'
import './select-categories-side.less'


export default SelectCategoriesSide ###: Function ### = \
		(props ###: any ###) ###: HTMLElement ### ->

	{ upd, currentCategorySet, mode, reset, cancel, apply } = props

	categoryItems = () ->
		entries ###: Array<[string, any]> ### = Object.entries props.categories.get()

		entries.map (ent ###: Array<[string, mixed]> ###) ->
			{ label, checked } = ent[1]

			<CategoryItem id={ent[0]}
				{...{ label, checked, upd, currentCategorySet, mode }} />

	<menu className={'select-categories select-categories_theme_1'}>
		<menu className='select-categories__items select-categories__items_theme_1'>
			{categoryItems()}
		</menu>
		<Show when={props.mode() == 'list'}>
			<MenuFilter {...{reset, cancel, apply}} />
		</Show>
	</menu>
