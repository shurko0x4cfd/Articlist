import { template as _$template } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";
import { createComponent as _$createComponent } from "solid-js/web";
const _tmpl$ = /*#__PURE__*/_$template(`<div class="new-article new-article_theme_1"><div class="new-article__body new-article__body_theme_1"></div></div>`, 4);
var NewArticle /*: Function */;

import EditableArticle from '../EditableArticle/editable-article.jsx';
import './new-article.less';
export default NewArticle = function (props /*: any */) /*: HTMLElement */{
  var author, categories, modeSet, send, text, title;
  ({
    text,
    title,
    author,
    modeSet,
    categories,
    send
  } = props);
  return (() => {
    const _el$ = _tmpl$.cloneNode(true),
      _el$2 = _el$.firstChild;
    _$insert(_el$2, _$createComponent(EditableArticle, {
      text,
      title,
      author,
      modeSet,
      categories,
      send
    }));
    return _el$;
  })();
};