import { template as _$template } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { Show as _$Show } from "solid-js/web";
import { createComponent as _$createComponent } from "solid-js/web";
const _tmpl$ = /*#__PURE__*/_$template(`<div class="page placer sizer"></div>`, 2);
var Page /*: Function */, _storeArticle, generationArtLim, initTable, signalObject, state, stateGet;
import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import '../shared/styles/shared.less';
import '../shared/mixin-blocks/placer.less';
import './page.less';
import '../../assets/funnel.svg';
import '../../assets/add-article.png';
import { fetchUrl, storeUrl, ajax, scrollUp, loremIpsum } from "../../tools";
import { u, noop, cl } from 'raffinade';
import Header from '../Header/header.jsx';
import Footer from '../Footer/footer.jsx';
import PaginationBar from '../PaginationBar/pagination-bar.jsx';
import PaginationButtonBack from '../PaginationButtonBack/pagination-button-back.jsx';
import PaginationButtonForward from '../PaginationButtonForward/pagination-button-forward.jsx';
import PageNumber from '../PageNumber/page-number.jsx';
import List from '../List/list.jsx';
import Article from '../Article/article.jsx';
import SelectCategoriesSide from '../SelectCategoriesSide/select-categories-side.jsx';
import NewArticle from '../NewArticle/new-article.jsx';

// Config
generationArtLim = 25;
state = {
  storedTitle: 'Enter new article title here',
  storedAuthorname: 'Enter your name here',
  storedText: ''
};
[stateGet] = createSignal(state);
export default Page = function (props /*: any */) /*: HTMLElement */{
  var addCategory, applyCategoriesInEdition, articles, articlesGet, articlesSet, cancelCategoriesEdition, categories /*: Function */, currentCategoryGet, currentCategorySet, currentSelectCategoriesSide /*: oSign */, drawSelectCategoriesSide, editCategory /*: oSign */, hasCategoryMgr, isList /*: Function */, loadArticles, modeGet, modeSet, pageNumBtnClickHandler, resetCategoriesEdition, restoreCategoriesEdition, selectedCategories, storeArticle, stub, updateCategoriesLight;
  stub = {
    items: [],
    _meta: {
      pageCount: 0,
      currentPage: '1'
    }
  };
  articles = props.articles || stub;
  [articlesGet, articlesSet] = createStore({
    articles
  });
  loadArticles = function (pageNum /*: string */ = '', category /*: string */ = '') {
    return ajax(function (xhr) {
      return articlesSet('articles', function () {
        return JSON.parse(xhr.responseText);
      });
    }, fetchUrl + pageNum + category);
  };
  /**
   * Пробуем сгенерировать статьи, если таблица пуста
   * Нужно перенести это на бэк
   */
  ;
  if (!articles._meta.pageCount || !articles.items.length) {
    initTable(u);
    loadArticles(u);
  }
  [currentCategoryGet, currentCategorySet] = createSignal(0);
  [modeGet, modeSet] = createSignal('list');
  currentSelectCategoriesSide = signalObject('folded');
  drawSelectCategoriesSide = function () {
    return modeGet() === 'edit' || currentSelectCategoriesSide.get() !== 'folded';
  };
  // Текущие настройки фильтрации
  // Пока захардкожено, но можно переместить на бэк
  hasCategoryMgr /*: oSign */ = signalObject({
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
  ;
  selectedCategories = function () {
    var copy /*: {[string]: string} */, has, id, ids, j, len;
    has = hasCategoryMgr.get(u);
    ids = Object.keys(has);
    copy = {};
    for (j = 0, len = ids.length; j < len; j++) {
      id = ids[j];
      copy[id] = {
        ...(has[id] || {})
      };
    }
    cl(copy);
    return copy;
  };
  /**
   *  Копируем настоящие настройки фильтрации в ещё не применённые,
   *  отображаемые на панели настроек
   */
  ;
  editCategory = signalObject(selectedCategories(u));
  // Какие категории добавить в новую статью из тех, что есть
  // По умолчанию никакие
  addCategory /*: oSign */ = signalObject({
    '1': {
      label: 'Category 1',
      checked: false
    },
    '2': {
      label: 'Category 2',
      checked: false
    }
  });
  isList = function (v /*: void */) /*: boolean  */{
    return modeGet() === 'list';
  };
  categories = function (v /*: void */) /*: oSign  */{
    if (isList(u)) {
      return editCategory;
    } else {
      return addCategory;
    }
  };
  /** Этот вариант допускает множественный выбор категорий */
  ;
  // const updateCategories = (categories, newCategories) => {
  // 		const update = categories.get()
  // 		const newCategoriyIds = Object.keys(newCategories)

  // 		for (const id of newCategoriyIds)
  // 				if (update[id])
  // 						update[id].checked = newCategories[id].checked || false

  // 		categories.set(update)
  // }
  /** Этот вариант не допускает множественный выбор категорий */
  ;
  updateCategoriesLight = function (categories /*: Object */, idNew /*: string */) {
    var dest /*: {[string]: any} */, id, ids, j, len, source;
    source = categories.get(u);
    ids = Object.keys(source);
    dest = {};
    for (j = 0, len = ids.length; j < len; j++) {
      id = ids[j];
      dest[id] = {};
      dest[id].label = source[id].label;
      if (id !== idNew) {
        dest[id].checked = false;
      } else {
        dest[id].checked = true;
      }
    }
    return categories.set(dest);
  };
  /**
   * В этом варианте ресета обнуляем настройки,
   * а не восстанавливаем их
   */
  ;
  resetCategoriesEdition = function () {
    editCategory.set(selectedCategories(u));
    return currentSelectCategoriesSide.set('folded');
  };
  /**
   * В этом варианте ресета восстанавливаем настройки,
   * а не обнуляем их
   */
  ;
  restoreCategoriesEdition = function () {
    editCategory.set(selectedCategories(u));
    return currentSelectCategoriesSide.set('folded');
  };
  cancelCategoriesEdition = function () {
    editCategory.set(selectedCategories(u));
    return currentSelectCategoriesSide.set('folded');
  };
  applyCategoriesInEdition = function () {
    hasCategoryMgr.set(editCategory.get(u));
    currentSelectCategoriesSide.set('folded');
    return loadArticles(void 0, '&category=' + currentCategoryGet());
  };
  storeArticle = function (title /*: string */, category_id /*: string */, category_title /*: string */, author /*: string */, text /*: string */) {
    return _storeArticle(title, category_id, category_title, author, text);
  };
  pageNumBtnClickHandler = function (evt /*: any */) {
    var pageNum;
    pageNum = evt.target.innerText || '1';
    return loadArticles('&page=' + pageNum, '&category=' + currentCategoryGet(u));
  };
  return (() => {
    const _el$ = _tmpl$.cloneNode(true);
    _$insert(_el$, _$createComponent(Header, {
      cNames: ' placer__moveable_padding-left_32px sizer__sizeable_min-height_128px '
    }), null);
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
          pageNumBtnClickHandler,
          PaginationButtonBack,
          PaginationButtonForward,
          PageNumber
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
    _$insert(_el$, _$createComponent(_$Show, {
      get when() {
        return isList();
      },
      get children() {
        return _$createComponent(List, {
          categories,
          articlesGet,
          articlesSet,
          Article
        });
      }
    }), null);
    _$insert(_el$, _$createComponent(_$Show, {
      get when() {
        return !isList();
      },
      get children() {
        return _$createComponent(NewArticle, _$mergeProps({
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
      }
    }), null);
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
          pageNumBtnClickHandler,
          PaginationButtonBack,
          PaginationButtonForward,
          PageNumber
        }));
      }
    }), null);
    _$insert(_el$, _$createComponent(Footer, {}), null);
    return _el$;
  })();
};

/*::
type oSign = {
	get: Function,
	set: Function
}

// const signalObject =
//	(arg, [get, set] = createSignal(arg)) =>
//	Object.freeze({ get, set })
*/
;
signalObject = function (arg /*: mixed */) /*: oSign */{
  var get, oSign /*: oSign */, set;
  [get, set] = createSignal(arg);
  return oSign = Object.freeze({
    get,
    set
  });
};
_storeArticle = function (title /*: string */ = 'No title', category_id /*: string */ = '0', category_title /*: string */, author /*: string */ = 'Unknown author', text /*: string */ = 'No text') /*: void */{
  var postData /*: any */;
  postData = {
    title,
    category: {
      id: category_id,
      title: category_title
    },
    author,
    text
  };
  return ajax(function () {
    return cl('Successfully sent');
  }, storeUrl, 'POST', postData);
};

/** Пробуем сгенерировать статьи  */
;
initTable = function () {
  var i, j, ref, results;
  results = [];
  for (i = j = 1, ref = generationArtLim; 1 <= ref ? j < ref : j > ref; i = 1 <= ref ? ++j : --j) {
    results.push(_storeArticle('Title ' + i, '0', 'none', 'Author ' + i, loremIpsum));
  }
  return results;
};

// TODO:
// Обновлять последнюю страницу, после отправки
// Переместить генерацию статей на бэк
// Переместить на бэк список тегов фильтрации
// Кэшировать загруженные статьи
// Пофиксить фильтрацию
// Пофиксить css
// Убрать секунды из даты
// Не обновилось после отправки
// После Apply подсветка кнопки-номера пагинации исчезает