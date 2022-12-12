import { template as _$template } from "solid-js/web";
import { delegateEvents as _$delegateEvents } from "solid-js/web";
import { addEventListener as _$addEventListener } from "solid-js/web";
const _tmpl$ = /*#__PURE__*/_$template(`<div class="menu-send menu-send_theme_1"><div class="menu-send__buttons menu-send__buttons_theme_1"><div class="menu-send__button_theme_1 menu-send__button-cancel_theme_1">Cancel</div><div class="menu-send__button_theme_1 menu-send__button-send_theme_1">Send</div></div></div>`, 8);
var MenuSend /*: Function */;

import './menu-send.less';
import { ONLY } from 'raffinade';
export default MenuSend = function (props /*: any */) /*: HTMLElement */{
  var handleSendClick;
  handleSendClick = function (evt /*: any */) /*: void */{
    var article, author, categories, category_id, category_title, i, id, ids, len, ref, ref1, ref2, ref3, ref4, ref5, ref6, text, title /*: string */;
    article /*: Element */;
    if (!(evt != null ? (ref = evt.target) != null ? (ref1 = ref.parentElement) != null ? (ref2 = ref1.parentNode) != null ? ref2.parentNode : void 0 : void 0 : void 0 : void 0)) {
      return;
    }
    article = evt != null ? (ref3 = evt.target) != null ? (ref4 = ref3.parentNode) != null ? (ref5 = ref4.parentNode) != null ? ref5.parentNode : void 0 : void 0 : void 0 : void 0;
    title = (article != null ? (ref6 = article.getElementsByClassName('credits__editable-title')[ONLY]) != null ? ref6.value : void 0 : void 0) || '';
    author = (article != null ? article.getElementsByClassName('credits__editable-author-name')[ONLY].value : void 0) || '';
    text = (article != null ? article.getElementsByTagName('textarea')[ONLY].value : void 0) || '';
    categories = props.categories.get();
    ids = Object.keys(categories);
    category_id = '0';
    for (i = 0, len = ids.length; i < len; i++) {
      id = ids[i];
      if (categories[id].checked) {
        category_id = id;
      }
    }
    category_title = categories[category_id] || {};
    category_title = category_title.label || 'none';
    if (category_title === 'none') {
      category_id = '0';
    }
    props.send(title, category_id, category_title, author, text);
    return props.modeSet('list');
  };
  return (() => {
    const _el$ = _tmpl$.cloneNode(true),
      _el$2 = _el$.firstChild,
      _el$3 = _el$2.firstChild,
      _el$4 = _el$3.nextSibling;
    _el$3.$$click = () => {
      return props.modeSet('list');
    };
    _$addEventListener(_el$4, "click", handleSendClick, true);
    return _el$;
  })();
};
_$delegateEvents(["click"]);