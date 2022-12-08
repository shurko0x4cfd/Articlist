// @flow

import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";

import './shared.less';
import './assets/funnel.svg';
import './assets/add-article.png';

import { fetchUrl, storeUrl, ajax, scrollUp, loremIpsum } from "./tools";
import { ONLY, noop, cl } from 'raffinade';

import Header from './components/Header/header.jsx';
import Footer from './components/Footer/footer.jsx';
import PaginationBar from './components/PaginationBar/pagination-bar.jsx';
import PaginationButtonBack
	from './components/PaginationButtonBack/pagination-button-back.jsx';
import PaginationButtonForward
	from './components/PaginationButtonForward/pagination-button-forward.jsx';
import PageNumber from './components/PageNumber/page-number.jsx';
import List from './components/List/list.jsx';
import Article from './components/Article/article.jsx';
import CategoryItem from './components/CategoryItem/category-item.jsx';
import MenuFilter from './components/MenuFilter/menu-filter.jsx';
import EditableCredits from './components/EditableCredits/editable-credits.jsx';


const state =
{
	storedTitle: 'Enter new article title here',
	storedAuthorname: 'Enter your name here',
	storedText: '',
};

const [stateGet] = createSignal(state);

function Page(props /*: any */) /*: HTMLElement */ {
	const stub =
	{
		items: [],
		_meta:
		{
			pageCount: 0,
			currentPage: '1'
		}
	};
	const articles = props.articles || stub;
	const [articlesGet, articlesSet] = createStore({ articles });

	const loadArticles = (pageNum /*: string*/ = '', category /*: string*/ = '') =>
		ajax(xhr => articlesSet('articles', () => JSON.parse(xhr.responseText)),
			fetchUrl + pageNum + category);

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

	const drawSelectCategoriesSide = () => modeGet() === 'edit' ||
		currentSelectCategoriesSide.get() !== 'folded';

	// Текущие настройки фильтрации
	// Пока захардкожено, но можно переместить на бэк
	const hasCategoryMgr /*: oSign */ = signalObject({
		'0': { label: 'Any', checked: true },
		'1': { label: 'Category 1', checked: false },
		'2': { label: 'Category 2', checked: false },
	});

	// Нужно заменить на store ?
	/** Копирует настройки фильтрации */
	const selectedCategories = () => {
		const has = hasCategoryMgr.get();
		const ids = Object.keys(has);
		const copy /*: {[string]: string} */ = { id: '' };

		for (const id of ids)
			copy[id] = { ...(has[id] || {}) };

		return copy;
	};

	/** 
	 *  Копируем настоящие настройки фильтрации в ещё не применённые,
	 *  отображаемые на панели настроек
	 */
	const editCategory /*: oSign */ = signalObject(selectedCategories());

	// Какие категории добавить в новую статью из тех, что есть
	// По умолчанию никакие
	const addCategory /*: oSign */ = signalObject({
		'1': { label: 'Category 1', checked: false },
		'2': { label: 'Category 2', checked: false },
	});

	const isList /*: Function */ = (u /*: void */) /*: boolean  */ => modeGet() === 'list';

	const categories /*: Function */ = (u /*: void */) /*: oSign  */ =>
		isList() ? editCategory : addCategory;

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

			if (id !== idNew)
				dest[id].checked = false;
			else
				dest[id].checked = true;
		}
		categories.set(dest);
	};

	/**
	 * В этом варианте ресета обнуляем настройки,
	 * а не восстанавливаем их
	 */
	const resetCategoriesEdition = () => {
		editCategory.set(selectedCategories());
		currentSelectCategoriesSide.set('folded');
	}

	/**
	 * В этом варианте ресета восстанавливаем настройки,
	 * а не обнуляем их
	 */
	const restoreCategoriesEdition = () => {
		editCategory.set(selectedCategories());
		currentSelectCategoriesSide.set('folded');
	}

	const cancelCategoriesEdition = () => {
		editCategory.set(selectedCategories());
		currentSelectCategoriesSide.set('folded');
	}

	const applyCategoriesInEdition = () => {
		hasCategoryMgr.set(editCategory.get());
		currentSelectCategoriesSide.set('folded');
		loadArticles(undefined, '&category=' + currentCategoryGet());
	}


	function storeArticle(title /*: string*/,
		category_id /*: string */,
		category_title /*: string */,
		author /*: string */,
		text /*: string */) {
		_storeArticle(title, category_id, category_title, author, text);
	}

	function pageNumBtnClickHandler(evt /*: any */) {
		const pageNum = evt.target.innerText || '1';
		loadArticles('&page=' + pageNum, '&category=' + currentCategoryGet());
	}

	return (
		<div className='page'>
			<Header />
			<Show when={isList()}>
				<PaginationBar
					categoriesState={currentSelectCategoriesSide}
					{...{
						modeGet, modeSet, articlesGet, pageNumBtnClickHandler,
						PaginationButtonBack, PaginationButtonForward, PageNumber
					}}
					scrollUp={noop} />
			</Show>
			<Show when={drawSelectCategoriesSide()}>
				<SelectCategoriesSide categories={categories()}
					mode={modeGet}
					draw={drawSelectCategoriesSide}
					upd={updateCategoriesLight.bind(null, categories())}
					cancel={cancelCategoriesEdition}
					reset={resetCategoriesEdition}
					apply={applyCategoriesInEdition}
					{...{ currentCategorySet }} />
			</Show>
			{isList() ?
				<List {...{ categories, articlesGet, articlesSet, Article }} /> :
				<NewArticle text={stateGet().storedText}
					title={stateGet().storedTitle}
					author={stateGet().storedAuthorname}
					{...{ modeSet }}
					categories={categories()}
					send={storeArticle}
				/>}

			<Show when={isList()}>
				<PaginationBar
					categoriesState={currentSelectCategoriesSide}
					{...{
						modeGet, modeSet, scrollUp, articlesGet,
						pageNumBtnClickHandler, PaginationButtonBack,
						PaginationButtonForward, PageNumber
					}} />
			</Show>
			<Footer />
		</div>);
}

function NewArticle(props /*: any */) {
	return (
		<div className='new-article new-article_theme_1'>
			<div className='new-article__body_theme_1'>
				<EditableArticle
					text={props.text}
					title={props.title}
					author={props.author}
					modeSet={props.modeSet}
					categories={props.categories}
					send={props.send}
				/>
			</div>
		</div>

	);
}

function EditableArticle(props /*: any */) {
	return (
		<div className='editable-article-container'>
			<article className='editable-article article_theme_1 
				editable-article_theme_1 article_corner_rounded_3'>

				<EditableCredits title={props.title} author={props.author} />

				<textarea type='text'
					className='editable-article__body 
						editable-article__body_theme_1'
					value={props.text}
					placeholder='Start article writing there...' />

				<MenuSend modeSet={props.modeSet}
					categories={props.categories}
					send={props.send}
				/>
			</article>
		</div>);
}


function MenuSend(props /*: any */) {

	const handleSendClick =
		(evt /*: any */) /*: void*/ => {

			let article /*: Element  */;
			if (!evt?.target?.parentElement?.parentNode?.parentNode)
				return;
			article = evt?.target?.parentNode?.parentNode?.parentNode;

			const title /*: string  */ = article
				.getElementsByClassName('credits__editable-title')[ONLY]?.value || '';

			const author = article
				.getElementsByClassName('credits__editable-author-name')[ONLY].value;
			const text = article.getElementsByTagName('textarea')[ONLY].value;
			const categories = props.categories.get();
			const ids = Object.keys(categories);

			let category_id = '0';
			for (const id of ids)
				if (categories[id].checked)
					category_id = id;

			let category_title = categories[category_id] || {};
			category_title = category_title.label || 'none';

			if (category_title === 'none')
				category_id = '0';

			props.send(title, category_id, category_title, author, text);

			props.modeSet('list');
		};

	return (
		<div className='menu-send menu-send_theme_1'>
			<div className='menu-send__buttons menu-send__buttons_theme_1'>
				<div className='menu-send__button_theme_1 
					menu-send__button-cancel_theme_1'
					onClick={() => props.modeSet('list')}>

					Cancel
				</div>
				<div className='menu-send__button_theme_1 
					menu-send__button-send_theme_1'
					onClick={handleSendClick}>

					Send
				</div>
			</div>
		</div>);
}


function SelectCategoriesSide(props /*: any */) {

	const categoryItems = () => {
		const entries /*: Array<[string, any]> */ = Object.entries(props.categories.get());

		return entries.map(ent =>
			<CategoryItem id={ent[0]}
				label={ent[1].label} checked={ent[1].checked} upd={props.upd}
				currentCategorySet={props.currentCategorySet}
				mode={props.mode}
			/>);
	};

	return (
		<Show when={props.draw()}>
			<menu className={'select-categories select-categories_theme_1'}>
				<menu className='select-categories__items_theme_1'>
					{categoryItems()}
				</menu>
				<Show when={props.mode() === 'list'}>
					<MenuFilter reset={props.reset}
						cancel={props.cancel} apply={props.apply} />
				</Show>
			</menu>
		</Show>);
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


function signalObject(arg /*: mixed  */) /*: oSign */ {
	const [get, set] = createSignal(arg);
	const oSign /*: oSign */ = Object.freeze({ get, set });
	return oSign;
}


function _storeArticle(title /*: string */ = 'No title',
	category_id /*: string */ = '0',
	category_title /*: string */,
	author /*: string */ = 'Unknown author',
	text /*: string */ = 'No text') /*: void */ {

	const postData /*: any */ =
	{
		title,
		category:
		{
			id: category_id,
			title: category_title
		},
		author,
		text
	};

	ajax(() => console.log('Successfully sent'), storeUrl, 'POST', postData);
}


/** Пробуем сгенерировать статьи  */
function initTable() {
	for (let i = 1; i < 45; i++)
		_storeArticle('Title ' + i, '0', 'none', 'Author ' + i, loremIpsum);
}


// TODO:
// Обновлять последнюю страницу, после отправки
// Переместить генерацию статей на бэк
// Переместить на бэк список тегов фильтрации
// Кэшировать загруженные статьи
// Пофиксить фильтрацию
// Пофиксить css
// Убрать секунды из даты
// Не обновилось после отправки


export default Page;
