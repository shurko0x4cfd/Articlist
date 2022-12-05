import { createComponent as _$createComponent } from "solid-js/web";
/* @refresh reload */
import { render } from 'solid-js/web';
import Page from './Page';
import { ajax } from "./tools";
import { ONLY } from 'raffinade';
const start /*: void */ = (xhr /*: Object */) => {
  const text = xhr.responseText;
  const articles = JSON.parse(text);
  render(() => _$createComponent(Page, {
    articles
  }), document.getElementsByClassName('articlist-root-el')[ONLY]);
};

// Init Загружаем первую страницу
ajax(start);