### @flow ###

import PageNumber from '../PageNumber/page-number.jsx'
import './pagination-bar_theme_1.less'
import { ONE } from 'raffinade'


numbers = (numbeRange ###: {from: number, to: number}  ###,
	hightLightPages ###: Function ###,
	pageNumBtnClickHandler ###: Function ###) ->

	<PageNumber {...{ number, hightLightPages, pageNumBtnClickHandler }} /> for number in [numbeRange.from..numbeRange.to]


export default PaginationBar = (props ###: any ###) ###: HTMLElement ### ->
	numbeRange = { from: ONE, to: props.articlesGet.articles._meta.pageCount }
	hightLightPages = () -> props.articlesGet.articles._meta.currentPage

	filterClickHandler = ->
		props.scrollUp()

		state = props.categoriesState.get()
		state = if state == 'folded' then 'unfolded' else 'folded'
		props.categoriesState.set(state)

	addClickHandler = ->
		state = props.modeGet();
		state = state == 'list' ? 'edit' : 'list';
		props.modeSet(state);

	<nav className='pagination-bar pagination-bar_theme_1'>
		<div className='pagination-bar__filter pagination-bar__filter_theme_1'
			onClick={filterClickHandler}>

			<img className='funnel-16' src='./src/assets/funnel.svg' />
			<h4 className='button2-like button2-like_theme_1'>
				filter by categoriy
			</h4>
		</div>
		<div className='pagination-bar__controls pagination-bar__controls_theme_1'>
			{props.PaginationButtonBack}

			<div className='pagination-bar__numbers pagination-bar__numbers_theme_1'>
				{numbers(numbeRange, hightLightPages, props.pageNumBtnClickHandler)}
			</div>

			{props.PaginationButtonForward}
		</div>
		<div className='pagination-bar__add-article pagination-bar__add-article_theme_1'
			onClick={addClickHandler}>

			<img className='funnel-16' src='./src/assets/add-article-2.png' />
			<h4 className='button2-like button2-like_theme_1'>
				add article
			</h4>
		</div>
	</nav>
