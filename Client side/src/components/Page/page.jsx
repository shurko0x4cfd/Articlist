/* @flow */
var Page/*: Function */, _storeArticle, initTable, signalObject, state, stateGet;

import {
  createSignal
} from "solid-js";

import {
  createStore
} from "solid-js/store";

import '../../shared.less';

import '../../assets/funnel.svg';

import '../../assets/add-article.png';

import {
  fetchUrl,
  storeUrl,
  ajax,
  scrollUp,
  loremIpsum
} from "../../tools";

import {
  ONLY,
  noop,
  cl
} from 'raffinade';

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

state = {
  storedTitle: 'Enter new article title here',
  storedAuthorname: 'Enter your name here',
  storedText: ''
};

[stateGet] = createSignal(state);

export default Page = function(props/*: any */)/*: HTMLElement */ {
  var addCategory, applyCategoriesInEdition, articles, articlesGet, articlesSet, cancelCategoriesEdition, categories/*: Function */, currentCategoryGet, currentCategorySet, currentSelectCategoriesSide/*: oSign */, drawSelectCategoriesSide, editCategory/*: oSign */, hasCategoryMgr, isList/*: Function */, loadArticles, modeGet, modeSet, pageNumBtnClickHandler, resetCategoriesEdition, restoreCategoriesEdition, selectedCategories, storeArticle, stub, updateCategoriesLight;
  stub = {
    items: [],
    _meta: {
      pageCount: 0,
      currentPage: '1'
    }
  };
  articles = props.articles || stub;
  [articlesGet, articlesSet] = createStore({articles});
  loadArticles = function(pageNum/*: string */ = '', category/*: string */ = '') {
    return ajax((function(xhr) {
      return articlesSet('articles', function() {
        return JSON.parse(xhr.responseText);
      });
    }), fetchUrl + pageNum + category);
  };
  /**
	  * Пробуем сгенерировать статьи, если таблица пуста
	  * Нужно перенести это на бэк
	  */;
  if (!articles._meta.pageCount || !articles.items.length) {
    initTable();
    loadArticles();
  }
  [currentCategoryGet, currentCategorySet] = createSignal(0);
  [modeGet, modeSet] = createSignal('list');
  currentSelectCategoriesSide = signalObject('folded');
  drawSelectCategoriesSide = () => {
    return modeGet() === 'edit' || currentSelectCategoriesSide.get() !== 'folded';
  };
  // Текущие настройки фильтрации
  // Пока захардкожено, но можно переместить на бэк
  hasCategoryMgr/*: oSign */ = signalObject({
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
  /** Копирует настройки фильтрации */;
  selectedCategories = function() {
    var copy/*: {[string]: string} */, has, id, ids, j, len;
    has = hasCategoryMgr.get();
    ids = Object.keys(has);
    copy = {
      id: ''
    };
    for (j = 0, len = ids.length; j < len; j++) {
      id = ids[j];
      copy[id] = {...(has[id] || {})};
    }
    return copy;
  };
  /**
	  *  Копируем настоящие настройки фильтрации в ещё не применённые,
	  *  отображаемые на панели настроек
	  */;
  editCategory = signalObject(selectedCategories());
  // Какие категории добавить в новую статью из тех, что есть
  // По умолчанию никакие
  addCategory/*: oSign */ = signalObject({
    '1': {
      label: 'Category 1',
      checked: false
    },
    '2': {
      label: 'Category 2',
      checked: false
    }
  });
  isList = function(v/*: void */)/*: boolean  */ {
    return modeGet() === 'list';
  };
  categories = function(v/*: void */)/*: oSign  */ {
    if (isList()) {
      return editCategory;
    } else {
      return addCategory;
    }
  };
  /** Этот вариант допускает множественный выбор категорий */;
  // const updateCategories = (categories, newCategories) => {
  // 		const update = categories.get();
  // 		const newCategoriyIds = Object.keys(newCategories);

  // 		for (const id of newCategoriyIds)
  // 				if (update[id])
  // 						update[id].checked = newCategories[id].checked || false;

  // 		categories.set(update);
  // };
  /** Этот вариант не допускает множественный выбор категорий */;
  updateCategoriesLight = function(categories/*: Object */, idNew/*: string */) {
    var dest/*: {[string]: any} */, id, ids, j, len, source;
    source = categories.get();
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
	  */;
  resetCategoriesEdition = function() {
    editCategory.set(selectedCategories());
    return currentSelectCategoriesSide.set('folded');
  };
  /**
	  * В этом варианте ресета восстанавливаем настройки,
	  * а не обнуляем их
	  */;
  restoreCategoriesEdition = function() {
    editCategory.set(selectedCategories());
    return currentSelectCategoriesSide.set('folded');
  };
  cancelCategoriesEdition = function() {
    editCategory.set(selectedCategories());
    return currentSelectCategoriesSide.set('folded');
  };
  applyCategoriesInEdition = function() {
    hasCategoryMgr.set(editCategory.get());
    currentSelectCategoriesSide.set('folded');
    return loadArticles(void 0, '&category=' + currentCategoryGet());
  };
  storeArticle = function(title/*: string */, category_id/*: string */, category_title/*: string */, author/*: string */, text/*: string */) {
    return _storeArticle(title, category_id, category_title, author, text);
  };
  pageNumBtnClickHandler = function(evt/*: any */) {
    var pageNum;
    pageNum = evt.target.innerText || '1';
    return loadArticles('&page=' + pageNum, '&category=' + currentCategoryGet());
  };
  return <div className='page'>
		<Header />
		<Show when={isList()}>
			<PaginationBar categoriesState={currentSelectCategoriesSide} {...{modeGet, modeSet, articlesGet, pageNumBtnClickHandler, PaginationButtonBack, PaginationButtonForward, PageNumber}} scrollUp={noop} />
		</Show>

		<Show when={drawSelectCategoriesSide()}>
			<SelectCategoriesSide categories={categories()} mode={modeGet} draw={drawSelectCategoriesSide} upd={updateCategoriesLight.bind(null, categories())} cancel={cancelCategoriesEdition} reset={resetCategoriesEdition} apply={applyCategoriesInEdition} {...{currentCategorySet}} />
		</Show>

		<Show when={isList()}>
			<List {...{categories, articlesGet, articlesSet, Article}} />
		</Show>
		<Show when={!isList()}>
			<NewArticle text={stateGet().storedText} title={stateGet().storedTitle} author={stateGet().storedAuthorname} {...{modeSet}} categories={categories()} send={storeArticle} />
		</Show>

		<Show when={isList()}>
			<PaginationBar categoriesState={currentSelectCategoriesSide} {...{modeGet, modeSet, scrollUp, articlesGet, pageNumBtnClickHandler, PaginationButtonBack, PaginationButtonForward, PageNumber}} />
		</Show>
		<Footer />
	</div>;
};

/*::
type oSign =
	get: Function
	set: Function

// const signalObject =
//	(arg, [get, set] = createSignal(arg)) =>
//	Object.freeze({ get, set });
*/;

signalObject = function(arg/*: mixed */)/*: oSign */ {
  var get, oSign/*: oSign */, set;
  [get, set] = createSignal(arg);
  return oSign = Object.freeze({get, set});
};

_storeArticle = function(title/*: string */ = 'No title', category_id/*: string */ = '0', category_title/*: string */, author/*: string */ = 'Unknown author', text/*: string */ = 'No text')/*: void */ {
  var postData/*: any */;
  postData = {
    title,
    category: {
      id: category_id,
      title: category_title
    },
    author,
    text
  };
  return ajax((function() {
    return console.log('Successfully sent');
  }), storeUrl, 'POST', postData);
};

/** Пробуем сгенерировать статьи  */;

initTable = function() {
  var i, j, results;
  results = [];
  for (i = j = 1; j < 45; i = ++j) {
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