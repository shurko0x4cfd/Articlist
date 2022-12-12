import { template as _$template } from "solid-js/web";
import { setAttribute as _$setAttribute } from "solid-js/web";
import { effect as _$effect } from "solid-js/web";
const _tmpl$ = /*#__PURE__*/_$template(`<header class="credits credits_theme_1"><input class="credits__title credits__editable-title credits__editable-title_theme_1"><div class="credits__info credits__info_theme_1"><div class="credits__author credits__author_theme_1"><div class="credits__author-header credits__author-header_theme_1"><h4>Author:</h4></div><input class="credits__editable-author-name credits__editable-author-name_theme_1"></div></div></header>`, 12);
var EditableCredits /*: Function */;

import './editable-credits_theme_1.less';
export default EditableCredits = function (props /*: any */) /*: HTMLElement */{
  return (() => {
    const _el$ = _tmpl$.cloneNode(true),
      _el$2 = _el$.firstChild,
      _el$3 = _el$2.nextSibling,
      _el$4 = _el$3.firstChild,
      _el$5 = _el$4.firstChild,
      _el$6 = _el$5.nextSibling;
    _$effect(_p$ => {
      const _v$ = props.title,
        _v$2 = props.author;
      _v$ !== _p$._v$ && _$setAttribute(_el$2, "placeholder", _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && _$setAttribute(_el$6, "placeholder", _p$._v$2 = _v$2);
      return _p$;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return _el$;
  })();
};