
import { createSignal } from "solid-js";
import './Page.css';
import './assets/funnel.svg';
import './assets/add-article.png';
import 'https://cdn.jsdelivr.net/npm/jquery@3.2/dist/jquery.min.js';


const cl = console.log;
const ONLY = 0;

const urlFetch = 'http://localhost:4000/web/index.php?r=article/loadart';
const urlStore = "http://localhost:4000/web/index.php?r=article/storeart"

const state =
{
	storedTitle: 'Enter new article title here',
	storedAuthorname: 'Enter your name here',
	storedText: '',
}

const [stateGet] = createSignal(state);


function Page(props) {
	const stub =
	{
		items: [],
		_meta:
		{
			pageCount: 0,
			currentPage: 1
		}
	};
	const articles = props.data || stub;
	const [articlesGet, articlesSet] = createSignal(articles);

	// Загружаем страницу
	const loadArticles = (pageNum = '', category = '') => $.ajax({
		url: urlFetch + pageNum + category,
		method: 'GET',
		dataType: 'json',
	}).done(data => {
		articlesSet(data);
	});

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

	const [selectCategoriesSideGet, selectCategoriesSideSet] =
		createSignal('folded');

	const drawSelectCategoriesSide = () => modeGet() === 'edit' ||
		selectCategoriesSideGet() !== 'folded';

	// Текущие настройки фильтрации
	// Пока захардкожено, но можно переместить на бэк
	const hasCategoryMgr = createSignalObj({
		'0': { label: 'Any', checked: false },
		'1': { label: 'Category 1', checked: false },
		'2': { label: 'Category 2', checked: false },
	});

	/** Копирует настройки фильтрации */
	const selectedCategories = () => {
		const has = hasCategoryMgr.get();
		const ids = Object.keys(has);
		const copy = {};

		for (const id of ids)
			copy[id] = { ...(has[id] || {}) };

		return copy;
	};

	/** 
	 *  Копируем настоящие настройки фильтрации в ещё не применённые,
	 *  отображаемые на панели настроек
	 */
	const editCategoryMgr = createSignalObj(selectedCategories());

	// Какие категории добавить в новую статью из тех, что есть
	// По умолчанию никакие
	const addCategoryMgr = createSignalObj({
		'1': { label: 'Category 1', checked: false },
		'2': { label: 'Category 2', checked: false },
	});

	const isList = () => modeGet() === 'list';

	const categories = () =>
		isList() ? editCategoryMgr : addCategoryMgr;

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
	const updateCategoriesLight = (categories, idNew) => {
		const source = categories.get();
		const ids = Object.keys(source);
		const dest = {};

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
		editCategoryMgr.set(selectedCategories());
		selectCategoriesSideSet('folded');
	}

	/**
	 * В этом варианте ресета восстанавливаем настройки,
	 * а не обнуляем их
	 */
	const restoreCategoriesEdition = () => {
		editCategoryMgr.set(selectedCategories());
		selectCategoriesSideSet('folded');
	}

	const cancelCategoriesEdition = () => {
		editCategoryMgr.set(selectedCategories());
		selectCategoriesSideSet('folded');
	}

	const applyCategoriesInEdition = () => {
		hasCategoryMgr.set(editCategoryMgr.get());
		selectCategoriesSideSet('folded');
		loadArticles(undefined, '&category=' + currentCategoryGet());
	}


	function storeArticle(title, category_id, category_title, author, text) {
		_storeArticle(title, category_id, category_title, author, text);
	}

	function pageNumBtnClickHandler(evt) {
		const pageNum = evt.target.innerText || 1;
		loadArticles('&page=' + pageNum, '&category=' + currentCategoryGet());
	}

	return (
		<div className='page'>
			<Header />
			{isList() ? <PaginationBar
				selectCategoriesSideSet={selectCategoriesSideSet}
				selectCategoriesSideGet={selectCategoriesSideGet}
				modeGet={modeGet}
				modeSet={modeSet}
				scrollUp={noop}
				articlesGet={articlesGet}
				pageNumBtnClickHandler={pageNumBtnClickHandler}
			/> : ''}
			{drawSelectCategoriesSide() ?
				<SelectCategoriesSide categories={categories()}
					mode={modeGet}
					draw={drawSelectCategoriesSide}
					upd={updateCategoriesLight.bind(null, categories())}
					cancel={cancelCategoriesEdition}
					reset={resetCategoriesEdition}
					apply={applyCategoriesInEdition}
					currentCategorySet={currentCategorySet}
				/> : ''}
			{isList() ?
				<List categories={categories} articlesGet={articlesGet}
					articlesSet={articlesSet}
				/> :
				<NewArticle text={stateGet().storedText}
					title={stateGet().storedTitle}
					author={stateGet().storedAuthorname}
					modeSet={modeSet}
					categories={categories()}
					send={storeArticle}
				/>}

			{isList() ? <PaginationBar
				selectCategoriesSideSet={selectCategoriesSideSet}
				selectCategoriesSideGet={selectCategoriesSideGet}
				modeGet={modeGet}
				modeSet={modeSet}
				scrollUp={scrollUp}
				articlesGet={articlesGet}
				pageNumBtnClickHandler={pageNumBtnClickHandler}
			/> : ''}
			<Footer />
		</div>);
}


function Header() {
	return (
		<div className='header'>
			<header className='header header__body header__body_theme_1'>
				<div className='header header__logo-side header__logo-side_theme_1'>

					<div className='header header__logo header__logo_theme_1'>
						<p>LOGO</p><p>TYPE</p>
					</div>
				</div>
				<div className='header header__title header__title_theme_1'>
					Header Name
				</div>
			</header>
		</div>);
}


function Footer() {
	return (
		<div className='footer'>
			<footer className='footer footer__body footer__body_theme_1'>
				{/* Footer */}
			</footer>
		</div>);
}


function List(props) {
	const items = () => props.articlesGet().items;

	return (
		<div className='list list_theme_1'>
			<div className='list list__body_theme_1'>
				{items().map(itm =>
					<Article text={itm.article}
						title={itm.title}
						author={itm.author}
						dateTime={itm.published_at}
						categories={props.categories()}
						categoryTitle={(itm.category || {}).title || 'none'}
					/>
				)}
			</div>
		</div>);
}

function NewArticle(props) {
	return (
		<div className='new-article new-article_theme_1'>
			<div className='new-article new-article__body_theme_1'>
				<EditableArticle text={props.text}
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

function EditableArticle(props) {
	return (
		<div className='editable-article-container'>
			<article className='editable-article article_theme_1 
				editable-article_theme_1 article_corner_rounded_3'>

				<EditableCredits title={props.title} author={props.author} />

				<textarea type='text' className='editable-article editable-article__body
					editable-article__body_theme_1' value={props.text}
					placeholder='Start article writing there...' />

				<MenuSend modeSet={props.modeSet}
					categories={props.categories}
					send={props.send}
				/>
			</article>
		</div>);
}


function MenuSend(props) {

	const handleSendClick = evt => {
		const article = evt.target.parentNode.parentNode.parentNode
		const title = article
			.getElementsByClassName('credits__editable-title')[ONLY].value;
		const author = article
			.getElementsByClassName('credits__editable-author-name')[ONLY].value;
		const text = article.getElementsByTagName('textarea')[ONLY].value;
		const categories = props.categories.get();
		const ids = Object.keys(categories);

		let category_id = 0;
		for (const id of ids)
			if (categories[id].checked)
				category_id = id;

		let category_title = categories[category_id] || {};
		category_title = category_title.label || 'none';

		if (category_title === 'none')
			category_id = 0;

		props.send(title, category_id, category_title, author, text);

		props.modeSet('list');
	};

	return (
		<div className='menu-send menu-send_theme_1'>
			<div className='menu-send menu-send__buttons menu-send__buttons_theme_1'>
				<div className='menu-send menu-send__button_theme_1 
					menu-send__button-cancel_theme_1'
					onClick={() => props.modeSet('list')}>

					Cancel
				</div>
				<div className='menu-send menu-send__button_theme_1 
					menu-send__button-send_theme_1' onClick={handleSendClick}>

					Send
				</div>
			</div>
		</div>);
}


function EditableCredits(props) {
	return (
		<div className='credits-container'>
			<header className='credits credits__theme_1'>
				<input placeholder={props.title} className='credits credits__title 
					credits__editable-title credits__editable-title_theme_1' />
				<div className='credits credits__info credits__info_theme_1'>
					<div className='credits credits__author credits__author_theme_1'>

						<div className='credits credits__author-header 
							credits__author-header_theme_1'>

							<h4>Author:</h4>
						</div>
						<input className='credits credits__editable-author-name 
							credits__editable-author-name_theme_1'
							placeholder={props.author} />
					</div>
				</div>
			</header>
		</div>);
}

function Article(props) {
	return (
		<div className='article-container'>
			<article className='article article_theme_1 
				article_corner_rounded_3'>

				<Credits title={props.title} author={props.author}
					dateTime={props.dateTime} />

				<div className='article article-element article-element_theme_1'>
					{props.text}
				</div>
				<Categories categoryTitle={props.categoryTitle} />
			</article>
		</div>);
}


function Credits(props) {
	return (
		<div className='credits-container'>
			<header className='credits credits__theme_1'>
				<h1 className='credits credits__title credits__title_theme_1'>
					{props.title}
				</h1>
				<div className='credits credits__info credits__info_theme_1'>
					<div className='credits credits__author credits__author_theme_1'>
						<div className='credits credits__author-header 
						credits__author-header_theme_1'>

							<h4>Author:</h4>
						</div>
						<div>{props.author}</div>
					</div>
					<div className='credits credits__published-at 
					credits__published-at_theme_1'>

						<div className='credits credits__published-at-header 
						credits__published-at-header_theme_1'>

							<h4>Published At:</h4>
						</div>
						<div>{props.dateTime}</div>
					</div>
				</div>
			</header>
		</div>);
}


function Categories(props) {
	return (
		<div className='categories-container'>
			<div className='categories categories_theme_1'>
				<div className='categories categories__header categories__header_theme_1'>
					<h4>Categories:</h4>
				</div>
				<CategoriesList categoryTitle={props.categoryTitle} />
			</div>
		</div>);
}


function CategoriesList(props) {
	const categoryTitle = props.categoryTitle || <Tag category={{ label: 'none' }} />;

	return (
		<div className='categories-list'>
			<div className='categories-list categories-list__body 
				categories-list__body_theme_1'>

				<Tag label={categoryTitle} />
			</div>
		</div>);
}


function Tag(props) {
	return (
		<div className='tag'>
			<div className='tag tag__text tag__text_theme_1'>
				{'#' + props.label}
			</div>
		</div>);

}


function PaginationBar(props) {
	const numbeRange = { from: 1, to: props.articlesGet()._meta.pageCount };
	const hightLightPages = () => props.articlesGet()._meta.currentPage;

	const filterClickHandler = () => {
		props.scrollUp();

		let state = props.selectCategoriesSideGet();
		state = state === 'folded' ? 'unfolded' : 'folded';
		props.selectCategoriesSideSet(state);
	}

	const addClickHandler = () => {
		let state = props.modeGet();
		state = state === 'list' ? 'edit' : 'list';
		props.modeSet(state);
	}

	return (
		<div className={'pagination-bar pagination-bar_theme_1'}>
			<div className='pagination-bar__filter' onClick={filterClickHandler}>
				<img className='funnel-16' src='./src/assets/funnel.svg' />
				<h4 className='button2-like button2-like_theme_1'>
					filter by categoriy
				</h4>
			</div>
			<div className='pagination-bar__controls'>
				<PaginationButtonBack />

				<div className='pagination-bar__numbers'>
					{numbers(numbeRange, hightLightPages, props.pageNumBtnClickHandler)}
				</div>

				<PaginationButtonForward />
			</div>
			<div className='pagination-bar__add-article' onClick={addClickHandler}>
				<img className='funnel-16' src='./src/assets/add-article-2.png' />
				<h4 className='button2-like button2-like_theme_1'>
					add article
				</h4>
			</div>
		</div>);
}


function numbers(numbeRange, hightLightPages, pageNumBtnClickHandler) {
	const numbers = [];
	for (let number = numbeRange.from; number <= numbeRange.to; number++) {
		numbers.push(<PageNumber number={number}
			hightLightPages={hightLightPages}
			pageNumBtnClickHandler={pageNumBtnClickHandler} />);
	}

	return numbers;
}


function PageNumber(props) {
	const hightlighted = () => // ! сравнение нестрогое
		props.hightLightPages() == props.number ? ' highlighted-button ' : '';

	return (
		<div className='page-number-container'>
			<div className='page-number'>
				<div className={'page-number page-number_theme_1 button-like button-like_theme_1 ' + hightlighted()}
					onClick={props.pageNumBtnClickHandler}>
					{props.number}
				</div>
			</div>
		</div>);
}

// 
function PaginationButtonBack() {
	return (
		<div className='pgb-back-container'>
			<div className='pgb-back'>
				<div className='pgb-back page-number_theme_1 
					pgb-back__item-back pgb-back__item-back_theme_1 
						button-like button-like_theme_1'>

					{/* {'🢐🢐🢐 prev'} */}
				</div>
			</div>
		</div>);
}

function PaginationButtonForward() {
	return (
		<div className='pgb-forward-container'>
			<div className='pgb-forward'>
				<div className='pgb-forward page-number_theme_1 
					pgb-forward__item-forward pgb-forward__item-forward_theme_1 
						button-like button-like_theme_1'>

					{/* {'next 🢒🢒🢒'} */}
				</div>
			</div>
		</div>);
}

function SelectCategoriesSide(props) {
	const hidden = () =>
		props.draw() ? '' : ' hidden ';

	const categoryItems = () => {
		const entries = Object.entries(props.categories.get());

		return entries.map(ent =>
			<CategoryItem id={ent[0]}
				label={ent[1].label} checked={ent[1].checked} upd={props.upd}
				currentCategorySet={props.currentCategorySet}
				mode={props.mode}
			/>);
	};

	return (
		<div className={'select-categories select-categories_theme_1' + hidden()}>
			<div className='select-categories select-categories__items 
					select-categories__items_theme_1'>

				{categoryItems()}
				{props.mode() === 'edit' ? '' :
					<MenuFilter reset={props.reset}
						cancel={props.cancel} apply={props.apply}
					/>}
			</div>
		</div>);
}


function MenuFilter(props) {
	// resetCategoriesInEdition
	return (
		<div className='menu-filter menu-filter_theme_1'>
			<div className='menu-filter menu-filter__button_theme_1 
				menu-filter__button_cancel_theme_1'
				onClick={props.cancel}>

				Cancel
			</div>
			<div className='menu-filter menu-filter__button_theme_1  
				menu-filter__button_theme_1 menu-filter__button-apply_theme_1'
				onClick={props.apply}>

				Apply
			</div>
		</div>
	);
}


function CategoryItem(props) {
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
	const checkBoxClickHandlerLight = evt => {
		const id = evt.target.id;
		props.upd(id);

		props.mode() === 'list' &&
			props.currentCategorySet(id);
	}

	return (
		<div className='category-item category-item_theme_1'>
			<input className='category-item category-item__chbox'
				type='checkbox' id={props.id}
				checked={props.checked}
				onClick={checkBoxClickHandlerLight} />

			<label className='category-item category-item__label 
					category-item__label_theme_1' for={props.id}>
				{props.label}</label>
		</div>);
}


function createSignalObj(arg) {
	const [get, set] = createSignal(arg);
	return Object.freeze({ get, set });
}


function scrollUp() {
	setTimeout(() =>
		document.getElementsByTagName('html')[ONLY].scroll(undefined, 0));
}


function _storeArticle(title = 'No title', category_id = 0,
	category_title, author = 'Unknown author', text = 'No text') {

	const postData =
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

	$.ajax({
		url: urlStore,
		data: JSON.stringify(postData),
		method: 'POST',
		success: () => console.log('Successfully sent'),
		dataType: 'json',
	});


}


function noop() { }


const loremIpsum =
	`Lorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.`;


/** Пробуем сгенерировать статьи  */
function initTable() {
	for (let i = 1; i < 45; i++)
		_storeArticle('Title ' + i, 0, 'none', 'Author ' + i, loremIpsum);
}


export default Page;
