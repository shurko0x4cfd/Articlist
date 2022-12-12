import { template as _$template } from "solid-js/web";
import { delegateEvents as _$delegateEvents } from "solid-js/web";
import { effect as _$effect } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";
import { addEventListener as _$addEventListener } from "solid-js/web";
const _tmpl$ = /*#__PURE__*/_$template(`<button tabindex="0"><div class="page-number page-number_theme_1"></div></button>`, 4);
var PageNumber /*: Function */;

import './page-number_theme_1.less';
export default PageNumber = function (props /*: any */) /*: HTMLElement */{
  var hightlighted /*: Function */, pageNumBtnClickHandler /*: Function */;
  ({
    pageNumBtnClickHandler
  } = props);
  hightlighted = function (v /*: void */) /*: string */{
    if (props.hightLightPages() === props.number.toString()) {
      return ' highlighted-button ';
    } else {
      return '';
    }
  };
  return (() => {
    const _el$ = _tmpl$.cloneNode(true),
      _el$2 = _el$.firstChild;
    _$addEventListener(_el$, "keydown", pageNumBtnClickHandler, true);
    _$addEventListener(_el$, "click", pageNumBtnClickHandler, true);
    _$insert(_el$2, () => props.number);
    _$effect(() => _el$.className = 'button-like button-like_theme_1 ' + hightlighted());
    return _el$;
  })();
};
_$delegateEvents(["click", "keydown"]);