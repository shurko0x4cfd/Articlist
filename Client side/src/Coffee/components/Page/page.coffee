### @flow ###


import { createSignal } from "solid-js"
import { createStore } from "solid-js/store"

import '../../shared.less'
import './page.less'
import '../../assets/funnel.svg'
import '../../assets/add-article.png'

import { fetchUrl, storeUrl, ajax, scrollUp, loremIpsum } from "../../tools"
import { u, noop, cl } from 'raffinade'

import Header from '../Header/header.jsx'
import Footer from '../Footer/footer.jsx'
import PaginationBar from '../PaginationBar/pagination-bar.jsx'
import PaginationButtonBack from '../PaginationButtonBack/pagination-button-back.jsx'
import PaginationButtonForward from '../PaginationButtonForward/pagination-button-forward.jsx'
import PageNumber from '../PageNumber/page-number.jsx'
import List from '../List/list.jsx'
import Article from '../Article/article.jsx'
import SelectCategoriesSide from '../SelectCategoriesSide/select-categories-side.jsx'
import NewArticle from '../NewArticle/new-article.jsx'


# Config
generationArtLim = 25


state =
	storedTitle: 'Enter new article title here'
	storedAuthorname: 'Enter your name here'
	storedText: ''

[stateGet] = createSignal state


export default Page ###: Function ### = \
	(props ###: any ###) ###: HTMLElement ### ->

	stub =
		items: []
		_meta:
			pageCount: 0
			currentPage: '1'

	articles = props.articles || stub
	[articlesGet, articlesSet] = createStore { articles }

	loadArticles = (pageNum ###: string ### = '',
		category ###: string ### = '') ->

		ajax ((xhr) -> articlesSet('articles', -> JSON.parse xhr.responseText)), fetchUrl + pageNum + category

		
	`/**
	  * Пробуем сгенерировать статьи, если таблица пуста
	  * Нужно перенести это на бэк
	  */`
	if !articles._meta.pageCount || !articles.items.length
		initTable u
		loadArticles u
	
	[currentCategoryGet, currentCategorySet] = createSignal 0
	[modeGet, modeSet] = createSignal 'list'
	currentSelectCategoriesSide ###: oSign ### = signalObject 'folded'

	drawSelectCategoriesSide = -> modeGet() == 'edit' ||
		currentSelectCategoriesSide.get() != 'folded'

	# Текущие настройки фильтрации
	# Пока захардкожено, но можно переместить на бэк
	hasCategoryMgr ###: oSign ### = signalObject
		'0': { label: 'Any', checked: true }
		'1': { label: 'Category 1', checked: false }
		'2': { label: 'Category 2', checked: false }

	
	# Нужно заменить на store ?
	`/** Копирует настройки фильтрации */`
	selectedCategories = ->
		has = hasCategoryMgr.get u
		ids = Object.keys has
		copy ###: {[string]: string} ### = { id: '' }

		for id in ids
			copy[id] = { ...(has[id] || {}) }
		copy

	`/**
	  *  Копируем настоящие настройки фильтрации в ещё не применённые,
	  *  отображаемые на панели настроек
	  */`
	editCategory ###: oSign ### = signalObject selectedCategories u

	# Какие категории добавить в новую статью из тех, что есть
	# По умолчанию никакие
	addCategory ###: oSign ### = signalObject
		'1': { label: 'Category 1', checked: false }
		'2': { label: 'Category 2', checked: false }


	isList ###: Function ### = (v ###: void ###) ###: boolean  ### ->
		modeGet() == 'list'

	categories ###: Function ### = (v ###: void ###) ###: oSign  ### ->
		if isList u then editCategory else addCategory


	`/** Этот вариант допускает множественный выбор категорий */`
	# const updateCategories = (categories, newCategories) => {
	# 		const update = categories.get()
	# 		const newCategoriyIds = Object.keys(newCategories)

	# 		for (const id of newCategoriyIds)
	# 				if (update[id])
	# 						update[id].checked = newCategories[id].checked || false

	# 		categories.set(update)
	# }


	`/** Этот вариант не допускает множественный выбор категорий */`
	updateCategoriesLight = (categories ###: Object ###, idNew ###: string ###) ->
		source = categories.get u
		ids = Object.keys source
		dest ###: {[string]: any} ### = {}

		for id in ids
			dest[id] = {}
			dest[id].label = source[id].label

			if id != idNew
				dest[id].checked = false
			else
				dest[id].checked = true
		categories.set dest


	`/**
	  * В этом варианте ресета обнуляем настройки,
	  * а не восстанавливаем их
	  */`
	resetCategoriesEdition = ->
		editCategory.set selectedCategories u
		currentSelectCategoriesSide.set 'folded'


	`/**
	  * В этом варианте ресета восстанавливаем настройки,
	  * а не обнуляем их
	  */`
	restoreCategoriesEdition = ->
		editCategory.set selectedCategories u
		currentSelectCategoriesSide.set 'folded'


	cancelCategoriesEdition = ->
		editCategory.set selectedCategories u
		currentSelectCategoriesSide.set 'folded'

	
	applyCategoriesInEdition = ->
			hasCategoryMgr.set editCategory.get u
			currentSelectCategoriesSide.set 'folded'
			loadArticles undefined, '&category=' + currentCategoryGet()


	storeArticle = (
		title          ###: string ###,
		category_id    ###: string ###,
		category_title ###: string ###,
		author         ###: string ###,
		text           ###: string ###) ->
		_storeArticle title, category_id, category_title, author, text


	pageNumBtnClickHandler = (evt ###: any ###) ->
		pageNum = evt.target.innerText || '1'
		loadArticles '&page=' + pageNum, '&category=' + currentCategoryGet u

	
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

		<Show when={isList()}>
			<List {...{ categories, articlesGet, articlesSet, Article }} />
		</Show>
		<Show when={not isList()}>
			<NewArticle
				text={stateGet().storedText}
				title={stateGet().storedTitle}
				author={stateGet().storedAuthorname}
				{...{ modeSet }}
				categories={categories()}
				send={storeArticle} />
		</Show>

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
	</div>
	
	
# const signalObject =
#	(arg, [get, set] = createSignal(arg)) =>
#	Object.freeze({ get, set })
	

`/*::
type oSign =
	get: Function
	set: Function
*/`


signalObject = (arg ###: mixed ###) ###: oSign ### ->
	[get, set] = createSignal arg
	oSign ###: oSign ### = Object.freeze { get, set }


_storeArticle = (
	title          ###: string ### = 'No title',
	category_id    ###: string ### = '0',
	category_title ###: string ###,
	author         ###: string ### = 'Unknown author',
	text           ###: string ### = 'No text') ###: void ### ->

	postData ###: any ### =
		{
			title
			category:
				id: category_id
				title: category_title
			author
			text
		}

	ajax (-> cl 'Successfully sent'), storeUrl, 'POST', postData


`/** Пробуем сгенерировать статьи  */`
initTable = ->
	for i in [1...generationArtLim]
		_storeArticle 'Title ' + i, '0', 'none', 'Author ' + i, loremIpsum


# TODO:
# Обновлять последнюю страницу, после отправки
# Переместить генерацию статей на бэк
# Переместить на бэк список тегов фильтрации
# Кэшировать загруженные статьи
# Пофиксить фильтрацию
# Пофиксить css
# Убрать секунды из даты
# Не обновилось после отправки
# После Apply подсветка кнопки-номера пагинации исчезает
