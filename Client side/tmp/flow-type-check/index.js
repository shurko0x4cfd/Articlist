import { createComponent as _$createComponent } from "solid-js/web";
var start /*: Function */;

import './components/shared/styles/reset.less';
import { render } from 'solid-js/web';
import Page from './components/Page/page.jsx';
import { ajax } from "./tools";
import { first, u } from 'raffinade';
start = function (xhr /*: any */) /*: void */{
  var articles /*: any  */;
  articles = JSON.parse(xhr.responseText);
  // Bad patch. To fix
  articles._meta.currentPage = articles._meta.currentPage.toString(u);
  render(function (v /*: void */) /*: Function */{
    return _$createComponent(Page, {
      articles
    });
  }, first(document.getElementsByClassName('articlist-437cc6d26ebe')));
  return u;
};

// Loading & mount of first page
ajax(start);