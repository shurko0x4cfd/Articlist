var CategoryItem;

import './category-item_theme_1.less';

export default CategoryItem = function(props/*: any */)/*: HTMLElement */ {
  var checkBoxClickHandlerLight;
  /*
   * Вариант допускает множественный выбор категорий

  	checkBoxClickHandler = (evt) ->
  		chbox = evt.target
  		items = chbox.parentNode.parentNode
  		itemNodes = items.querySelectorAll '.category-item__chbox'
  		itemsArray = Array.from itemNodes

  		newSet = itemsArray.reduce (newSet, itm) ->
  			(newSet[itm.id] = { checked: itm.checked }, newSet), {});

  		props.upd newSet
   */
  // Этот вариант не допускает множественный выбор категорий
  checkBoxClickHandlerLight = function({target})/*: {target: {id: string}} */ {
    var id;
    id = target.id;
    props.upd(id);
    return props.mode() === 'list' && props.currentCategorySet(id);
  };
  return <li className='category-item'>
		<input className='category-item__chbox' type='checkbox' id={props.id} checked={props.checked} onClick={checkBoxClickHandlerLight} />

		<label className='category-item__label' for={props.id}>
			{props.label}</label>
	</li>;
};
