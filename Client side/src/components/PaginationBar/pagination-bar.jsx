/* @flow */
var PaginationBar, numbers;

import PageNumber from '../PageNumber/page-number.jsx';

import './pagination-bar_theme_1.less';

import {
  ONE,
  u,
  cl
} from 'raffinade';

numbers = function(numbeRange/*: {from: number, to: number}  */, hightLightPages/*: number */, pageNumBtnClickHandler/*: Function */) {
  var i, number, ref, ref1, results;
  results = [];
  for (number = i = ref = numbeRange.from, ref1 = numbeRange.to; (ref <= ref1 ? i <= ref1 : i >= ref1); number = ref <= ref1 ? ++i : --i) {
    results.push(<PageNumber {...{number, hightLightPages, pageNumBtnClickHandler}} />);
  }
  return results;
};

export default PaginationBar = function(props/*: any */)/*: HTMLElement */ {
  var addClickHandler/*: Function */, filterClickHandler/*: Function */, hightLightPages/*: Function */, numbeRange/*: any */;
  numbeRange = {
    from: ONE,
    to: props.articlesGet.articles._meta.pageCount
  };
  hightLightPages = function(v/*: void */)/*: string */ {
    var cp;
    return cp = props.articlesGet.articles._meta.currentPage;
  };
  filterClickHandler = function(evt/*: Event */)/*: void */ {
    props.scrollUp();
    props.categoriesState.set((props.categoriesState.get() === 'folded' ? 'unfolded' : 'folded'));
    return u;
  };
  addClickHandler = function(evt/*: Event */)/*: void */ {
    props.modeSet(props.modeGet() === 'list' ? 'edit' : 'list');
    return u;
  };
  return <nav className='pagination-bar pagination-bar_theme_1'>
		<div className='pagination-bar__filter pagination-bar__filter_theme_1' onClick={filterClickHandler}>

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
		<div className='pagination-bar__add-article pagination-bar__add-article_theme_1' onClick={addClickHandler}>
			<img className='funnel-16' src='./src/assets/add-article-2.png' />
			<h4 className='button2-like button2-like_theme_1'>
				add article
			</h4>
		</div>
	</nav>;
};
