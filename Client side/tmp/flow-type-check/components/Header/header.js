import { template as _$template } from "solid-js/web";
import { effect as _$effect } from "solid-js/web";
const _tmpl$ = /*#__PURE__*/_$template(`<header><div class="header__logo header__logo_theme_1"><p>LOGO</p><p>TYPE</p></div><div class="header__title header__title_theme_1 placer__margin-left placer__margin-left_64px">Header Name</div></header>`, 10);
var Header /*: Function */;

import './header_theme_1.less';
import '../shared/mixin-blocks/placer.less';
import '../shared/mixin-blocks/sizer.less';
export default Header = function (props /*: any */) /*: HTMLElement */{
  return (() => {
    const _el$ = _tmpl$.cloneNode(true);
    _$effect(() => _el$.className = 'header header_theme_1 ' + props.cNames);
    return _el$;
  })();
};