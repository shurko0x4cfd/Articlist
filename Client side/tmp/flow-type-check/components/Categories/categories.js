import { template as _$template } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";
import { createComponent as _$createComponent } from "solid-js/web";
const _tmpl$ = /*#__PURE__*/_$template(`<fiiter class="categories categories_theme_1"><div class="categories__header"><h4>Categories:</h4></div></fiiter>`, 6);
var Categories /*: Function */;

import './categories_theme_1.less';
import CategoriesList from '../CategoriesList/categories-list.jsx';
export default Categories = function (props /*: any */) /*: HTMLElement */{
  return (() => {
    const _el$ = _tmpl$.cloneNode(true),
      _el$2 = _el$.firstChild;
    _$insert(_el$, _$createComponent(CategoriesList, {
      get categoryTitle() {
        return props.categoryTitle;
      }
    }), null);
    return _el$;
  })();
};