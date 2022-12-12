import { template as _$template } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { createComponent as _$createComponent } from "solid-js/web";
const _tmpl$ = /*#__PURE__*/_$template(`<div class="categories-list categories-list_theme_1 placer"><div class="categories-list__body categories-list__body_theme_1"></div></div>`, 4);
var CategoriesList /*: Function */;

import './categories-list_theme_1.less';
import '../shared/mixin-blocks/placer.less';
import Tag from '../Tag/tag.jsx';
export default CategoriesList = function (props /*: any */) /*: HTMLElement */{
  var cNames, categoryTitle;
  cNames = ' placer__moveable_padding-left_8px ';
  categoryTitle = props.categoryTitle || _$createComponent(Tag, {
    category: {
      label: 'none'
    }
  });
  return (() => {
    const _el$ = _tmpl$.cloneNode(true),
      _el$2 = _el$.firstChild;
    _$insert(_el$2, _$createComponent(Tag, _$mergeProps({
      label: categoryTitle
    }, {
      cNames
    })));
    return _el$;
  })();
};