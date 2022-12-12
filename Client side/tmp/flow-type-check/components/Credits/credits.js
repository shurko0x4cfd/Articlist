import { template as _$template } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";
const _tmpl$ = /*#__PURE__*/_$template(`<header class="credits credits_theme_1"><h1 class="credits__title credits__title_theme_1"></h1><div class="credits__info credits__info_theme_1"><div class="credits__author credits__author_theme_1"><div class="credits__author-header credits__author-header_theme_1"><h4>Author:</h4></div><div></div></div><div class="credits__published-at credits__published-at_theme_1"><div class="credits__published-at-header credits__published-at-header_theme_1"><h4>Published At:</h4></div><div></div></div></div></header>`, 22);
var Credits;
import './_theme_1.less';
export default Credits = function (props /*: any */) /*: HTMLElement */{
  return (() => {
    const _el$ = _tmpl$.cloneNode(true),
      _el$2 = _el$.firstChild,
      _el$3 = _el$2.nextSibling,
      _el$4 = _el$3.firstChild,
      _el$5 = _el$4.firstChild,
      _el$6 = _el$5.nextSibling,
      _el$7 = _el$4.nextSibling,
      _el$8 = _el$7.firstChild,
      _el$9 = _el$8.nextSibling;
    _$insert(_el$2, () => props.title);
    _$insert(_el$6, () => props.author);
    _$insert(_el$9, () => props.dateTime);
    return _el$;
  })();
};