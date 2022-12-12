import { template as _$template } from "solid-js/web";
import { createComponent as _$createComponent } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";
const _tmpl$ = /*#__PURE__*/_$template(`<div class="list list_theme_1"><div class="list__body list__body_theme_1"></div></div>`, 4);
var List /*: Function */;

import './list_theme_1.less';
export default List = function (props /*: any */) /*: HTMLElement */{
  var items /*: Function */;
  items = function (v /*: void  */) /*: Array<any> */{
    return props.articlesGet.articles.items;
  };
  return (() => {
    const _el$ = _tmpl$.cloneNode(true),
      _el$2 = _el$.firstChild;
    _$insert(_el$2, () => items().map(function (itm /*: any */) /*: Array<HTMLElement> */{
      return _$createComponent(props.Article, {
        get text() {
          return itm.article;
        },
        get title() {
          return itm.title;
        },
        get author() {
          return itm.author;
        },
        get dateTime() {
          return itm.published_at;
        },
        get categories() {
          return props.categories();
        },
        get categoryTitle() {
          return (itm.category || {}).title || 'none';
        },
        cNames: ' placer__moveable_margin_16px '
      });
    }));
    return _el$;
  })();
};