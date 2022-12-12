import { template as _$template } from "solid-js/web";
import { delegateEvents as _$delegateEvents } from "solid-js/web";
import { addEventListener as _$addEventListener } from "solid-js/web";
const _tmpl$ = /*#__PURE__*/_$template(`<menu class="menu-filter menu-filter_theme_1"><a class="menu-filter__button_theme_1 menu-filter__button_cancel_theme_1" role="button" tabindex="0">Cancel</a><a class="menu-filter__button_theme_1 menu-filter__button-apply_theme_1" role="button" tabindex="0">Apply</a></menu>`, 6);
var MenuFilter /*: Function */;

import './menu-filter_theme_1.less';
export default MenuFilter = function (props /*: any */) /*: HTMLElement */{
  var apply, cancel;
  ({
    cancel,
    apply
  } = props);
  return (() => {
    const _el$ = _tmpl$.cloneNode(true),
      _el$2 = _el$.firstChild,
      _el$3 = _el$2.nextSibling;
    _$addEventListener(_el$2, "keydown", cancel, true);
    _$addEventListener(_el$2, "click", cancel, true);
    _$addEventListener(_el$3, "keydown", apply, true);
    _$addEventListener(_el$3, "click", apply, true);
    return _el$;
  })();
};

// a -> button
// css [role="button"]:focus {outline: none;} ?
_$delegateEvents(["click", "keydown"]);