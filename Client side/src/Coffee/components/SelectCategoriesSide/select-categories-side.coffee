### @flow ###

import CategoryItem from '../CategoryItem/category-item.jsx'
import MenuFilter from '../MenuFilter/menu-filter.jsx'
import './select-categories-side.less'


export default SelectCategoriesSide ###: Function ### = \
		(props ###: any ###) ###: HTMLElement ### ->

	{ upd, currentCategorySet, mode } = props

	categoryItems = () ->
		entries ###: Array<[string, any]> ### = Object.entries props.categories.get()

		entries.map (ent ###: Array<any> ###) ->
			{ label, checked } = ent[1]

			<CategoryItem id={ent[0]}
				{...{ label, checked, upd, currentCategorySet, mode }} />

	<Show when={props.draw()}>
		<menu className={'select-categories select-categories_theme_1'}>
			<menu className='select-categories__items_theme_1'>
				{categoryItems()}
			</menu>
			<Show when={props.mode() == 'list'}>
				<MenuFilter reset={props.reset}
					cancel={props.cancel} apply={props.apply} />
			</Show>
		</menu>
	</Show>
