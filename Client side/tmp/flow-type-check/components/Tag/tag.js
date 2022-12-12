import { template as _$template } from "solid-js/web";
import { effect as _$effect } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";
import { createComponent as _$createComponent } from "solid-js/web";
import { Show as _$Show } from "solid-js/web";
const _tmpl$ = /*#__PURE__*/_$template(`<div><div class="tag__text tag__text_theme_1"></div></div>`, 4);
var Tag;
import './tag__text_theme_1.less';
import '../shared/mixin-blocks/placer.less';
export default Tag = function (props /*: any */) /*: HTMLElement */{
  return (() => {
    const _el$ = _tmpl$.cloneNode(true),
      _el$2 = _el$.firstChild;
    _$insert(_el$2, _$createComponent(_$Show, {
      get when() {
        return props.label !== 'none';
      },
      get children() {
        return '#' + props.label;
      }
    }), null);
    _$insert(_el$2, _$createComponent(_$Show, {
      get when() {
        return props.label === 'none';
      },
      children: "none"
    }), null);
    _$effect(() => _el$.className = 'tag ' + props.cNames);
    return _el$;
  })();
};