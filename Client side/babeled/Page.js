// @flow
import { template as _$template } from "solid-js/web";
import { delegateEvents as _$delegateEvents } from "solid-js/web";
import { addEventListener as _$addEventListener } from "solid-js/web";
import { setAttribute as _$setAttribute } from "solid-js/web";
import { effect as _$effect } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { Show as _$Show } from "solid-js/web";
import { createComponent as _$createComponent } from "solid-js/web";
const _tmpl$ = /*#__PURE__*/_$template(`<div class="page"></div>`, 2),
  _tmpl$2 = /*#__PURE__*/_$template(`<div class="footer"><footer class="footer footer__body footer__body_theme_1"></footer></div>`, 4),
  _tmpl$3 = /*#__PURE__*/_$template(`<div class="list list_theme_1"><div class="list__body_theme_1"></div></div>`, 4),
  _tmpl$4 = /*#__PURE__*/_$template(`<div class="new-article new-article_theme_1"><div class="new-article__body_theme_1"></div></div>`, 4),
  _tmpl$5 = /*#__PURE__*/_$template(`<div class="editable-article-container"><article class="editable-article article_theme_1 
				editable-article_theme_1 article_corner_rounded_3"><textarea type="text" class="editable-article__body 
						editable-article__body_theme_1" placeholder="Start article writing there..."></textarea></article></div>`, 6),
  _tmpl$6 = /*#__PURE__*/_$template(`<div class="menu-send menu-send_theme_1"><div class="menu-send__buttons menu-send__buttons_theme_1"><div class="menu-send__button_theme_1 
					menu-send__button-cancel_theme_1">Cancel</div><div class="menu-send__button_theme_1 
					menu-send__button-send_theme_1">Send</div></div></div>`, 8),
  _tmpl$7 = /*#__PURE__*/_$template(`<div class="credits-container"><header class="credits credits__theme_1"><input class="credits__title credits__editable-title 
						credits__editable-title_theme_1"><div class="credits__info credits__info_theme_1"><div class="credits__author credits__author_theme_1"><div class="credits__author-header 
							credits__author-header_theme_1"><h4>Author:</h4></div><input class="credits__editable-author-name 
							credits__editable-author-name_theme_1"></div></div></header></div>`, 14),
  _tmpl$8 = /*#__PURE__*/_$template(`<div class="article-container"><article class="article article_theme_1 
				article_corner_rounded_3"><div class="article-element article-element_theme_1"></div></article></div>`, 6),
  _tmpl$9 = /*#__PURE__*/_$template(`<div class="credits-container"><header class="credits__theme_1"><h1 class="credits__title credits__title_theme_1"></h1><div class="credits__info credits__info_theme_1"><div class="credits__author credits__author_theme_1"><div class="credits__author-header 
						credits__author-header_theme_1"><h4>Author:</h4></div><div></div></div><div class="credits__published-at 
					credits__published-at_theme_1"><div class="credits__published-at-header 
						credits__published-at-header_theme_1"><h4>Published At:</h4></div><div></div></div></div></header></div>`, 24),
  _tmpl$10 = /*#__PURE__*/_$template(`<div class="categories-container"><fiiter class="categories categories_theme_1"><div class="categories__header categories__header_theme_1"><h4>Categories:</h4></div></fiiter></div>`, 8),
  _tmpl$11 = /*#__PURE__*/_$template(`<div class="categories-list"><div class="categories-list__body 
				categories-list__body_theme_1"></div></div>`, 4),
  _tmpl$12 = /*#__PURE__*/_$template(`<div class="tag"><div class="tag__text tag__text_theme_1"></div></div>`, 4),
  _tmpl$13 = /*#__PURE__*/_$template(`<nav class="pagination-bar pagination-bar_theme_1"><div class="pagination-bar__filter_theme_1"><img class="funnel-16" src="./src/assets/funnel.svg"><h4 class="button2-like button2-like_theme_1">filter by categoriy</h4></div><div class="pagination-bar__controls_theme_1"><div class="pagination-bar__numbers_theme_1"></div></div><div class="pagination-bar__add-article_theme_1"><img class="funnel-16" src="./src/assets/add-article-2.png"><h4 class="button2-like button2-like_theme_1">add article</h4></div></nav>`, 16),
  _tmpl$14 = /*#__PURE__*/_$template(`<div class="page-number-container"><div class="page-number page-number_theme_1"><a role="button" tabindex="0"></a></div></div>`, 6),
  _tmpl$15 = /*#__PURE__*/_$template(`<div class="pgb-back-container"><div class="pgb-back"><div class="page-number_theme_1 
					pgb-back__item-back_theme_1 
					button-like_theme_1"></div></div></div>`, 6),
  _tmpl$16 = /*#__PURE__*/_$template(`<div class="pgb-forward-container"><div class="pgb-forward"><div class="pgb-forward__body 
					page-number_theme_1  button-like_theme_1"></div></div></div>`, 6),
  _tmpl$17 = /*#__PURE__*/_$template(`<menu class="select-categories select-categories_theme_1"><menu class="select-categories__items_theme_1"></menu></menu>`, 4),
  _tmpl$18 = /*#__PURE__*/_$template(`<menu class="menu-filter menu-filter_theme_1"><a class="menu-filter__button_theme_1 
				menu-filter__button_cancel_theme_1" role="button" tabindex="0">Cancel</a><a class="menu-filter__button_theme_1  
				menu-filter__button_theme_1 
				menu-filter__button-apply_theme_1" role="button" tabindex="0">Apply</a></menu>`, 6),
  _tmpl$19 = /*#__PURE__*/_$template(`<li class="category-item"><input class="category-item__chbox" type="checkbox"><label class="category-item__label"></label></li>`, 5);

import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import './shared.less';
import './assets/funnel.svg';
import './assets/add-article.png';
import { fetchUrl, storeUrl, ajax } from "./tools";
import { ONLY, noop, cl } from 'raffinade';
import Header from './components/Header/header.jsx';
const state = {
  storedTitle: 'Enter new article title here',
  storedAuthorname: 'Enter your name here',
  storedText: ''
};
const [stateGet] = createSignal(state);
function Page(props /*: any */) /*: HTMLElement */{
  const stub = {
    items: [],
    _meta: {
      pageCount: 0,
      currentPage: 1
    }
  };
  const articles = props.articles || stub;
  const [articlesGet, articlesSet] = createStore({
    articles
  });
  const loadArticles = (pageNum /*: string*/ = '', category /*: string*/ = '') => ajax(xhr => articlesSet('articles', () => JSON.parse(xhr.responseText)), fetchUrl + pageNum + category);

  /**
   * Пробуем сгенерировать статьи, если таблица пуста
   * Нужно перенести это на бэк
   */
  if (!articles._meta.pageCount || !articles.items.length) {
    initTable();
    loadArticles();
  }
  const [currentCategoryGet, currentCategorySet] = createSignal(0);
  const [modeGet, modeSet] = createSignal('list');
  const currentSelectCategoriesSide /*: oSign */ = signalObject('folded');
  const drawSelectCategoriesSide = () => modeGet() === 'edit' || currentSelectCategoriesSide.get() !== 'folded';

  // Текущие настройки фильтрации
  // Пока захардкожено, но можно переместить на бэк
  const hasCategoryMgr /*: oSign */ = signalObject({
    '0': {
      label: 'Any',
      checked: true
    },
    '1': {
      label: 'Category 1',
      checked: false
    },
    '2': {
      label: 'Category 2',
      checked: false
    }
  });

  // Нужно заменить на store ?
  /** Копирует настройки фильтрации */
  const selectedCategories = () => {
    const has = hasCategoryMgr.get();
    const ids = Object.keys(has);
    const copy /*: {[string]: string} */ = {
      id: ''
    };
    for (const id of ids) copy[id] = {
      ...(has[id] || {})
    };
    return copy;
  };

  /** 
   *  Копируем настоящие настройки фильтрации в ещё не применённые,
   *  отображаемые на панели настроек
   */
  const editCategoryMgr /*: oSign */ = signalObject(selectedCategories());

  // Какие категории добавить в новую статью из тех, что есть
  // По умолчанию никакие
  const addCategoryMgr /*: oSign */ = signalObject({
    '1': {
      label: 'Category 1',
      checked: false
    },
    '2': {
      label: 'Category 2',
      checked: false
    }
  });
  const isList /*: Function */ = (u /*: void */) /*: boolean  */ => modeGet() === 'list';
  const categories /*: Function */ = (u /*: void */) /*: oSign  */ => isList() ? editCategoryMgr : addCategoryMgr;

  /** Этот вариант допускает множественный выбор категорий */
  /* 
  const updateCategories = (categories, newCategories) => {
  	const update = categories.get();
  	const newCategoriyIds = Object.keys(newCategories);
  		for (const id of newCategoriyIds)
  		if (update[id])
  			update[id].checked = newCategories[id].checked || false;
  		categories.set(update);
  };
  */

  /** Этот вариант не допускает множественный выбор категорий */
  const updateCategoriesLight = (categories /*: Object*/, idNew /*: string*/) => {
    const source = categories.get();
    const ids = Object.keys(source);
    const dest /*: {[string]: any} */ = {};
    for (const id of ids) {
      dest[id] = {};
      dest[id].label = source[id].label;
      if (id !== idNew) dest[id].checked = false;else dest[id].checked = true;
    }
    categories.set(dest);
  };

  /**
   * В этом варианте ресета обнуляем настройки,
   * а не восстанавливаем их
   */
  const resetCategoriesEdition = () => {
    editCategoryMgr.set(selectedCategories());
    currentSelectCategoriesSide.set('folded');
  };

  /**
   * В этом варианте ресета восстанавливаем настройки,
   * а не обнуляем их
   */
  const restoreCategoriesEdition = () => {
    editCategoryMgr.set(selectedCategories());
    currentSelectCategoriesSide.set('folded');
  };
  const cancelCategoriesEdition = () => {
    editCategoryMgr.set(selectedCategories());
    currentSelectCategoriesSide.set('folded');
  };
  const applyCategoriesInEdition = () => {
    hasCategoryMgr.set(editCategoryMgr.get());
    currentSelectCategoriesSide.set('folded');
    loadArticles(undefined, '&category=' + currentCategoryGet());
  };
  function storeArticle(title /*: string*/, category_id /*: string */, category_title /*: string */, author /*: string */, text /*: string */) {
    _storeArticle(title, category_id, category_title, author, text);
  }
  function pageNumBtnClickHandler(evt /*: any */) {
    const pageNum = evt.target.innerText || '1';
    loadArticles('&page=' + pageNum, '&category=' + currentCategoryGet());
  }
  return (() => {
    const _el$ = _tmpl$.cloneNode(true);
    _$insert(_el$, _$createComponent(Header, {}), null);
    _$insert(_el$, _$createComponent(_$Show, {
      get when() {
        return isList();
      },
      get children() {
        return _$createComponent(PaginationBar, _$mergeProps({
          categoriesState: currentSelectCategoriesSide
        }, {
          modeGet,
          modeSet,
          articlesGet,
          pageNumBtnClickHandler
        }, {
          scrollUp: noop
        }));
      }
    }), null);
    _$insert(_el$, _$createComponent(_$Show, {
      get when() {
        return drawSelectCategoriesSide();
      },
      get children() {
        return _$createComponent(SelectCategoriesSide, _$mergeProps({
          get categories() {
            return categories();
          },
          mode: modeGet,
          draw: drawSelectCategoriesSide,
          get upd() {
            return updateCategoriesLight.bind(null, categories());
          },
          cancel: cancelCategoriesEdition,
          reset: resetCategoriesEdition,
          apply: applyCategoriesInEdition
        }, {
          currentCategorySet
        }));
      }
    }), null);
    _$insert(_el$, (() => {
      const _c$ = _$memo(() => !!isList());
      return () => _c$() ? _$createComponent(List, {
        categories,
        articlesGet,
        articlesSet
      }) : _$createComponent(NewArticle, _$mergeProps({
        get text() {
          return stateGet().storedText;
        },
        get title() {
          return stateGet().storedTitle;
        },
        get author() {
          return stateGet().storedAuthorname;
        }
      }, {
        modeSet
      }, {
        get categories() {
          return categories();
        },
        send: storeArticle
      }));
    })(), null);
    _$insert(_el$, _$createComponent(_$Show, {
      get when() {
        return isList();
      },
      get children() {
        return _$createComponent(PaginationBar, _$mergeProps({
          categoriesState: currentSelectCategoriesSide
        }, {
          modeGet,
          modeSet,
          scrollUp,
          articlesGet,
          pageNumBtnClickHandler
        }));
      }
    }), null);
    _$insert(_el$, _$createComponent(Footer, {}), null);
    return _el$;
  })();
}
function Footer(v /*: void */) /*: HTMLElement */{
  return _tmpl$2.cloneNode(true);
}
function List(props /*: any */) {
  const items = () => props.articlesGet.articles.items;
  return (() => {
    const _el$3 = _tmpl$3.cloneNode(true),
      _el$4 = _el$3.firstChild;
    _$insert(_el$4, () => items().map(itm => _$createComponent(Article, {
      get text() {
        return itm.article;
      },
      get title() {
        return itm.title;
      },
      get author() {
        return itm.author;
      },
      get dateTime() {
        return itm.published_at;
      },
      get categories() {
        return props.categories();
      },
      get categoryTitle() {
        return (itm.category || {}).title || 'none';
      }
    })));
    return _el$3;
  })();
}
function NewArticle(props /*: any */) {
  return (() => {
    const _el$5 = _tmpl$4.cloneNode(true),
      _el$6 = _el$5.firstChild;
    _$insert(_el$6, _$createComponent(EditableArticle, {
      get text() {
        return props.text;
      },
      get title() {
        return props.title;
      },
      get author() {
        return props.author;
      },
      get modeSet() {
        return props.modeSet;
      },
      get categories() {
        return props.categories;
      },
      get send() {
        return props.send;
      }
    }));
    return _el$5;
  })();
}
function EditableArticle(props /*: any */) {
  return (() => {
    const _el$7 = _tmpl$5.cloneNode(true),
      _el$8 = _el$7.firstChild,
      _el$9 = _el$8.firstChild;
    _$insert(_el$8, _$createComponent(EditableCredits, {
      get title() {
        return props.title;
      },
      get author() {
        return props.author;
      }
    }), _el$9);
    _$insert(_el$8, _$createComponent(MenuSend, {
      get modeSet() {
        return props.modeSet;
      },
      get categories() {
        return props.categories;
      },
      get send() {
        return props.send;
      }
    }), null);
    _$effect(() => _el$9.value = props.text);
    return _el$7;
  })();
}

// declare type ie = MouseEvent & {currentTarget: HTMLTextAreaElement};

function MenuSend(props /*: any */) {
  const handleSendClick = (evt /*: any */) /*: void*/ => {
    let article /*: Element  */;
    if (!evt?.target?.parentElement?.parentNode?.parentNode) return;
    article = evt?.target?.parentNode?.parentNode?.parentNode;
    const title /*: string  */ = article.getElementsByClassName('credits__editable-title')[ONLY]?.value || '';
    const author = article.getElementsByClassName('credits__editable-author-name')[ONLY].value;
    const text = article.getElementsByTagName('textarea')[ONLY].value;
    const categories = props.categories.get();
    const ids = Object.keys(categories);
    let category_id = '0';
    for (const id of ids) if (categories[id].checked) category_id = id;
    let category_title = categories[category_id] || {};
    category_title = category_title.label || 'none';
    if (category_title === 'none') category_id = '0';
    props.send(title, category_id, category_title, author, text);
    props.modeSet('list');
  };
  return (() => {
    const _el$10 = _tmpl$6.cloneNode(true),
      _el$11 = _el$10.firstChild,
      _el$12 = _el$11.firstChild,
      _el$13 = _el$12.nextSibling;
    _el$12.$$click = () => props.modeSet('list');
    _el$13.$$click = handleSendClick;
    return _el$10;
  })();
}

// $FlowIgnore
function EditableCredits(props /*: any */) {
  return (() => {
    const _el$14 = _tmpl$7.cloneNode(true),
      _el$15 = _el$14.firstChild,
      _el$16 = _el$15.firstChild,
      _el$17 = _el$16.nextSibling,
      _el$18 = _el$17.firstChild,
      _el$19 = _el$18.firstChild,
      _el$20 = _el$19.nextSibling;
    _$effect(_p$ => {
      const _v$ = props.title,
        _v$2 = props.author;
      _v$ !== _p$._v$ && _$setAttribute(_el$16, "placeholder", _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && _$setAttribute(_el$20, "placeholder", _p$._v$2 = _v$2);
      return _p$;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return _el$14;
  })();
}

// $FlowIgnore
function Article(props /*: any */) {
  return (() => {
    const _el$21 = _tmpl$8.cloneNode(true),
      _el$22 = _el$21.firstChild,
      _el$23 = _el$22.firstChild;
    _$insert(_el$22, _$createComponent(Credits, {
      get title() {
        return props.title;
      },
      get author() {
        return props.author;
      },
      get dateTime() {
        return props.dateTime;
      }
    }), _el$23);
    _$insert(_el$23, () => props.text);
    _$insert(_el$22, _$createComponent(Categories, {
      get categoryTitle() {
        return props.categoryTitle;
      }
    }), null);
    return _el$21;
  })();
}

// $FlowIgnore
function Credits(props /*: any */) {
  return (() => {
    const _el$24 = _tmpl$9.cloneNode(true),
      _el$25 = _el$24.firstChild,
      _el$26 = _el$25.firstChild,
      _el$27 = _el$26.nextSibling,
      _el$28 = _el$27.firstChild,
      _el$29 = _el$28.firstChild,
      _el$30 = _el$29.nextSibling,
      _el$31 = _el$28.nextSibling,
      _el$32 = _el$31.firstChild,
      _el$33 = _el$32.nextSibling;
    _$insert(_el$26, () => props.title);
    _$insert(_el$30, () => props.author);
    _$insert(_el$33, () => props.dateTime);
    return _el$24;
  })();
}
function Categories(props /*: any */) {
  return (() => {
    const _el$34 = _tmpl$10.cloneNode(true),
      _el$35 = _el$34.firstChild,
      _el$36 = _el$35.firstChild;
    _$insert(_el$35, _$createComponent(CategoriesList, {
      get categoryTitle() {
        return props.categoryTitle;
      }
    }), null);
    return _el$34;
  })();
}
function CategoriesList(props /*: any */) {
  const categoryTitle = props.categoryTitle || _$createComponent(Tag, {
    category: {
      label: 'none'
    }
  });
  return (() => {
    const _el$37 = _tmpl$11.cloneNode(true),
      _el$38 = _el$37.firstChild;
    _$insert(_el$38, _$createComponent(Tag, {
      label: categoryTitle
    }));
    return _el$37;
  })();
}
function Tag(props /*: any */) {
  return (() => {
    const _el$39 = _tmpl$12.cloneNode(true),
      _el$40 = _el$39.firstChild;
    _$insert(_el$40, _$createComponent(_$Show, {
      get when() {
        return props.label !== 'none';
      },
      fallback: () => 'none',
      get children() {
        return '#' + props.label;
      }
    }));
    return _el$39;
  })();
}
function PaginationBar(props /*: any */) {
  const numbeRange = {
    from: 1,
    to: props.articlesGet.articles._meta.pageCount
  };
  const hightLightPages = () => props.articlesGet.articles._meta.currentPage;
  const filterClickHandler = () => {
    props.scrollUp();
    let state = props.categoriesState.get();
    state = state === 'folded' ? 'unfolded' : 'folded';
    props.categoriesState.set(state);
  };
  const addClickHandler = () => {
    let state = props.modeGet();
    state = state === 'list' ? 'edit' : 'list';
    props.modeSet(state);
  };
  return (() => {
    const _el$41 = _tmpl$13.cloneNode(true),
      _el$42 = _el$41.firstChild,
      _el$43 = _el$42.nextSibling,
      _el$44 = _el$43.firstChild,
      _el$45 = _el$43.nextSibling;
    _el$42.$$click = filterClickHandler;
    _$insert(_el$43, _$createComponent(PaginationButtonBack, {}), _el$44);
    _$insert(_el$44, () => numbers(numbeRange, hightLightPages, props.pageNumBtnClickHandler));
    _$insert(_el$43, _$createComponent(PaginationButtonForward, {}), null);
    _el$45.$$click = addClickHandler;
    return _el$41;
  })();
}
function numbers(numbeRange /*: {from: number, to: number}  */, hightLightPages /*: Function  */, pageNumBtnClickHandler /*: Function */) {
  const numbers /*: Array<Function> */ = [];
  for (let number = numbeRange.from; number <= numbeRange.to; number++) {
    numbers.push(_$createComponent(PageNumber, {
      number,
      hightLightPages,
      pageNumBtnClickHandler
    }));
  }
  return numbers;
}
function PageNumber(props /*: any */) {
  const {
    pageNumBtnClickHandler
  } = props;
  const hightlighted = () =>
  // ! сравнение нестрогое
  props.hightLightPages() == props.number ? ' highlighted-button ' : '';
  return (() => {
    const _el$46 = _tmpl$14.cloneNode(true),
      _el$47 = _el$46.firstChild,
      _el$48 = _el$47.firstChild;
    _$addEventListener(_el$48, "keydown", pageNumBtnClickHandler, true);
    _$addEventListener(_el$48, "click", pageNumBtnClickHandler, true);
    _$insert(_el$48, () => props.number);
    _$effect(() => _el$48.className = 'button-like button-like_theme_1 ' + hightlighted());
    return _el$46;
  })();
}

// 
function PaginationButtonBack() {
  return _tmpl$15.cloneNode(true);
}
function PaginationButtonForward() {
  return _tmpl$16.cloneNode(true);
}
function SelectCategoriesSide(props /*: any */) {
  const categoryItems = () => {
    const entries /*: Array<[string, any]> */ = Object.entries(props.categories.get());
    return entries.map(ent => _$createComponent(CategoryItem, {
      get id() {
        return ent[0];
      },
      get label() {
        return ent[1].label;
      },
      get checked() {
        return ent[1].checked;
      },
      get upd() {
        return props.upd;
      },
      get currentCategorySet() {
        return props.currentCategorySet;
      },
      get mode() {
        return props.mode;
      }
    }));
  };
  return _$createComponent(_$Show, {
    get when() {
      return props.draw();
    },
    get children() {
      const _el$51 = _tmpl$17.cloneNode(true),
        _el$52 = _el$51.firstChild;
      _$insert(_el$52, categoryItems);
      _$insert(_el$51, _$createComponent(_$Show, {
        get when() {
          return props.mode() === 'list';
        },
        get children() {
          return _$createComponent(MenuFilter, {
            get reset() {
              return props.reset;
            },
            get cancel() {
              return props.cancel;
            },
            get apply() {
              return props.apply;
            }
          });
        }
      }), null);
      return _el$51;
    }
  });
}
function MenuFilter(props /*: any */) {
  const {
    cancel,
    apply
  } = props;
  return (() => {
    const _el$53 = _tmpl$18.cloneNode(true),
      _el$54 = _el$53.firstChild,
      _el$55 = _el$54.nextSibling;
    _$addEventListener(_el$54, "keydown", cancel, true);
    _$addEventListener(_el$54, "click", cancel, true);
    _$addEventListener(_el$55, "keydown", apply, true);
    _$addEventListener(_el$55, "click", apply, true);
    return _el$53;
  })();
}
// В css [role="button"]:focus {outline: none;}

function CategoryItem(props /*: any */) {
  /*
  	// Вариант хороший, но не точно соответствует заданию - допускает
  	// множественный выбор категорий
  		const checkBoxClickHandler = evt => {
  		const chbox = evt.target;
  		const items = chbox.parentNode.parentNode;
  		const itemNodes = items.querySelectorAll('.category-item__chbox')
  		const itemsArray = Array.from(itemNodes);
  
  		const newSet = itemsArray.reduce((newSet, itm) =>
  			(newSet[itm.id] = { checked: itm.checked }, newSet), {});
  
  		props.upd(newSet);
  	}
   */

  /** Этот вариант не допускает множественный выбор категорий */
  const checkBoxClickHandlerLight = ({
    target
  } /*: {target: {id: string}} */) => {
    const id = target.id;
    props.upd(id);
    props.mode() === 'list' && props.currentCategorySet(id);
  };
  return (() => {
    const _el$56 = _tmpl$19.cloneNode(true),
      _el$57 = _el$56.firstChild,
      _el$58 = _el$57.nextSibling;
    _el$57.$$click = checkBoxClickHandlerLight;
    _$insert(_el$58, () => props.label);
    _$effect(_p$ => {
      const _v$3 = props.id,
        _v$4 = props.id;
      _v$3 !== _p$._v$3 && _$setAttribute(_el$57, "id", _p$._v$3 = _v$3);
      _v$4 !== _p$._v$4 && _$setAttribute(_el$58, "for", _p$._v$4 = _v$4);
      return _p$;
    }, {
      _v$3: undefined,
      _v$4: undefined
    });
    _$effect(() => _el$57.checked = props.checked);
    return _el$56;
  })();
}

// const signalObject =
// 	(arg, [get, set] = createSignal(arg)) =>
// 		Object.freeze({ get, set });

/*::
type oSign = {
	get: Function,
	set: Function,
};
*/

function signalObject(arg /*: any  */) /*: oSign */{
  const [get, set] = createSignal(arg);
  const oSign /*: oSign */ = Object.freeze({
    get,
    set
  });
  return oSign;
}
const scrollUp = () => setTimeout(() => document.getElementsByTagName('html')[ONLY].scroll(0, 0));
function _storeArticle(title /*: string */ = 'No title', category_id /*: string */ = '0', category_title /*: string */, author /*: string */ = 'Unknown author', text /*: string */ = 'No text') /*: void */{
  const postData /*: any */ = {
    title,
    category: {
      id: category_id,
      title: category_title
    },
    author,
    text
  };
  ajax(() => console.log('Successfully sent'), storeUrl, 'POST', postData);
}
const loremIpsum = `Lorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.`;

/** Пробуем сгенерировать статьи  */
function initTable() {
  for (let i = 1; i < 45; i++) _storeArticle('Title ' + i, '0', 'none', 'Author ' + i, loremIpsum);
}

// TODO: Обновлять последнюю страницу, после отправки
// Переместить генерацию статей на бэк
// Переместить на бэк список тегов фильтрации
// Кэшировать загруженные статьи
// Реанимировать кнопки вперёд/назад
// Пофиксить фильтрацию
// Пофиксить имена классов css
// Убрать секунды из даты

export default Page;
_$delegateEvents(["click", "keydown"]);