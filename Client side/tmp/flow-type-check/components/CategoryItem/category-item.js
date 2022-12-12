import { template as _$template } from "solid-js/web";
import { delegateEvents as _$delegateEvents } from "solid-js/web";
import { setAttribute as _$setAttribute } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";
import { addEventListener as _$addEventListener } from "solid-js/web";
import { effect as _$effect } from "solid-js/web";
const _tmpl$ = /*#__PURE__*/_$template(`<li class="category-item"><input class="category-item__chbox" type="checkbox"><label class="category-item__label"></label></li>`, 5);
var CategoryItem;
import './category-item_theme_1.less';
export default CategoryItem = function (props /*: any */) /*: HTMLElement */{
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
  checkBoxClickHandlerLight = function ({
    target
  }) /*: void */ /*: {target: {id: string}} */{
    var id;
    id = target.id;
    props.upd(id);
    props.mode() === 'list' && props.currentCategorySet(id);
    return u;
  };
  return (() => {
    const _el$ = _tmpl$.cloneNode(true),
      _el$2 = _el$.firstChild,
      _el$3 = _el$2.nextSibling;
    _$addEventListener(_el$2, "click", checkBoxClickHandlerLight, true);
    _$insert(_el$3, () => props.label);
    _$effect(_p$ => {
      const _v$ = props.id,
        _v$2 = props.id;
      _v$ !== _p$._v$ && _$setAttribute(_el$2, "id", _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && _$setAttribute(_el$3, "for", _p$._v$2 = _v$2);
      return _p$;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    _$effect(() => _el$2.checked = props.checked);
    return _el$;
  })();
};
_$delegateEvents(["click"]);