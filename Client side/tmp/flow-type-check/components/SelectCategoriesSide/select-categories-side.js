import { template as _$template } from "solid-js/web";
import { Show as _$Show } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";
import { createComponent as _$createComponent } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
const _tmpl$ = /*#__PURE__*/_$template(`<menu class="select-categories select-categories_theme_1"><menu class="select-categories__items select-categories__items_theme_1"></menu></menu>`, 4);
var SelectCategoriesSide /*: Function */;

import CategoryItem from '../CategoryItem/category-item.jsx';
import MenuFilter from '../MenuFilter/menu-filter.jsx';
import './select-categories-side.less';
export default SelectCategoriesSide = function (props /*: any */) /*: HTMLElement */{
  var apply, cancel, categoryItems, currentCategorySet, mode, reset, upd;
  ({
    upd,
    currentCategorySet,
    mode,
    reset,
    cancel,
    apply
  } = props);
  categoryItems = function () {
    var entries /*: Array<[string, any]> */;
    entries = Object.entries(props.categories.get());
    return entries.map(function (ent /*: Array<[string, mixed]> */) {
      var checked, label;
      ({
        label,
        checked
      } = ent[1]);
      return _$createComponent(CategoryItem, _$mergeProps({
        get id() {
          return ent[0];
        }
      }, {
        label,
        checked,
        upd,
        currentCategorySet,
        mode
      }));
    });
  };
  return (() => {
    const _el$ = _tmpl$.cloneNode(true),
      _el$2 = _el$.firstChild;
    _$insert(_el$2, categoryItems);
    _$insert(_el$, _$createComponent(_$Show, {
      get when() {
        return props.mode() === 'list';
      },
      get children() {
        return _$createComponent(MenuFilter, {
          reset,
          cancel,
          apply
        });
      }
    }), null);
    return _el$;
  })();
};