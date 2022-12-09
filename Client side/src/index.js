/* @flow  */
var start/*: Function */;

import {
  /* @refresh reload */
  render
} from 'solid-js/web';

import Page from './components/Page/page.jsx';

import {
  ajax
} from "./tools";

import {
  first,
  u
} from 'raffinade';

start = function(xhr/*: any */)/*: void */ {
  var articles/*: any  */;
  articles = JSON.parse(xhr.responseText);
  // Bad patch. To fix
  articles._meta.currentPage = articles._meta.currentPage.toString(u);
  render(function(v/*: void */)/*: Function */ {
    return <Page {...{articles}} />;
  }, first(document.getElementsByClassName('articlist-root-el')));
  return u;
};

// Loading & mount of first page
ajax(start);
