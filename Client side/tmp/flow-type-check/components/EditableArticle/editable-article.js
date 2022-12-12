import { template as _$template } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";
import { effect as _$effect } from "solid-js/web";
import { createComponent as _$createComponent } from "solid-js/web";
const _tmpl$ = /*#__PURE__*/_$template(`<article class="editable-article article_theme_1 editable-article_theme_1 article_corner_rounded_3"><textarea type="text" class="editable-article__body editable-article__body_theme_1" placeholder="Start article writing there..."></textarea></article>`, 4);
var EditableArticle /*: Function */;

import EditableCredits from '../EditableCredits/editable-credits.jsx';
import MenuSend from '../MenuSend/menu-send.jsx';
import './editable-article.less';
export default EditableArticle = function (props /*: any */) /*: HTMLElement */{
  var categories, modeSet, send;
  ({
    modeSet,
    categories,
    send
  } = props);
  return (() => {
    const _el$ = _tmpl$.cloneNode(true),
      _el$2 = _el$.firstChild;
    _$insert(_el$, _$createComponent(EditableCredits, {
      get title() {
        return props.title;
      },
      get author() {
        return props.author;
      }
    }), _el$2);
    _$insert(_el$, _$createComponent(MenuSend, {
      modeSet,
      categories,
      send
    }), null);
    _$effect(() => _el$2.value = props.text);
    return _el$;
  })();
};