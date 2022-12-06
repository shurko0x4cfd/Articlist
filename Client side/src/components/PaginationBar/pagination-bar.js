/* @flow */
var PaginationBar, numbers;

import PageNumber from '../PageNumber/page-number.jsx';

import './pagination-bar_theme_1.less';

import {
  ONE
} from 'raffinade';

numbers = function(numbeRange/*: {from: number, to: number}  */, hightLightPages/*: Function */, pageNumBtnClickHandler/*: Function */) {
  var i, number, ref, ref1, results;
  results = [];
  for (number = i = ref = numbeRange.from, ref1 = numbeRange.to; (ref <= ref1 ? i <= ref1 : i >= ref1); number = ref <= ref1 ? ++i : --i) {
    results.push(<PageNumber {...{number, hightLightPages, pageNumBtnClickHandler}} />);
  }
  return results;
};

export default PaginationBar = function(props/*: any */)/*: HTMLElement */ {
  var addClickHandler, filterClickHandler, hightLightPages, numbeRange;
  numbeRange = {
    from: ONE,
    to: props.articlesGet.articles._meta.pageCount
  };
  hightLightPages = function() {
    return props.articlesGet.articles._meta.currentPage;
  };
  filterClickHandler = function() {
    var state;
    props.scrollUp();
    state = props.categoriesState.get();
    state = state === 'folded' ? 'unfolded' : 'folded';
    return props.categoriesState.set(state);
  };
  addClickHandler = function() {
    var ref, state;
    state = props.modeGet();
    state = (ref = state === 'list') != null ? ref : {
      'edit': 'list'
    };
    return props.modeSet(state);
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
