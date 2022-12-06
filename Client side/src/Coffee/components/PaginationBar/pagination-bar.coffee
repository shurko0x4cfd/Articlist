### @flow ###

import PageNumber from '../PageNumber/page-number.jsx'
import './pagination-bar_theme_1.less'
import { ONE, u, cl } from 'raffinade'


numbers = (numbeRange ###: {from: number, to: number}  ###,
	hightLightPages ###: number ###,
	pageNumBtnClickHandler ###: Function ###) ->

	<PageNumber {...{ number, hightLightPages, pageNumBtnClickHandler }} /> \
		for number in [numbeRange.from..numbeRange.to]


export default PaginationBar = (props ###: any ###) ###: HTMLElement ### ->
	numbeRange ###: any ### =
		from: ONE
		to: props.articlesGet.articles._meta.pageCount

	hightLightPages ###: Function ### = (v ###: void ###) ###: string ### ->
		cp = props.articlesGet.articles._meta.currentPage

	filterClickHandler ###: Function ### = (evt ###: Event ###) ###: void ### ->
		props.scrollUp()

		props.categoriesState.set (
			if props.categoriesState.get() == 'folded'
			then 'unfolded'
			else 'folded')
		u

	addClickHandler ###: Function ### = (evt ###: Event ###) ###: void ### ->
		props.modeSet if props.modeGet() == 'list' then 'edit' else 'list'
		u

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
