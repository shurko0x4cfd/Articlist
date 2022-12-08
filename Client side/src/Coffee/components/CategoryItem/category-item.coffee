### @flow ###

import './category-item_theme_1.less'


export default CategoryItem = (props ###: any ###) ###: HTMLElement ### ->
	###
		# Вариант допускает множественный выбор категорий

		checkBoxClickHandler = (evt) ->
			chbox = evt.target
			items = chbox.parentNode.parentNode
			itemNodes = items.querySelectorAll '.category-item__chbox'
			itemsArray = Array.from itemNodes
	
			newSet = itemsArray.reduce (newSet, itm) ->
				(newSet[itm.id] = { checked: itm.checked }, newSet), {});
	
			props.upd newSet
	###

	# Этот вариант не допускает множественный выбор категорий
	checkBoxClickHandlerLight =
		({ target } ###: {target: {id: string}} ###) ->
			id = target.id
			props.upd(id)

			props.mode() == 'list' &&
				props.currentCategorySet id

	<li className='category-item'>
		<input className='category-item__chbox'
			type='checkbox' id={props.id}
			checked={props.checked}
			onClick={checkBoxClickHandlerLight} />

		<label className='category-item__label' for={props.id}>
			{props.label}</label>
	</li>
