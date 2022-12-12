import { template as _$template } from "solid-js/web";
import { effect as _$effect } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";
import { createComponent as _$createComponent } from "solid-js/web";
const _tmpl$ = /*#__PURE__*/_$template(`<article><div class="article__text article__text_theme_1"></div></article>`, 4);
var Article /*: Function */;

import './_theme_1.less';
import '../shared/mixin-blocks/placer.less';
import Credits from '../Credits/credits.jsx';
import Categories from '../Categories/categories.jsx';
export default Article = function (props /*: any */) /*: HTMLElement */{
  return (() => {
    const _el$ = _tmpl$.cloneNode(true),
      _el$2 = _el$.firstChild;
    _$insert(_el$, _$createComponent(Credits, {
      get title() {
        return props.title;
      },
      get author() {
        return props.author;
      },
      get dateTime() {
        return props.dateTime;
      }
    }), _el$2);
    _$insert(_el$2, () => props.text);
    _$insert(_el$, _$createComponent(Categories, {
      get categoryTitle() {
        return props.categoryTitle;
      }
    }), null);
    _$effect(() => _el$.className = 'article article_theme_1 ' + props.cNames);
    return _el$;
  })();
};