import { template as _$template } from "solid-js/web";
import { delegateEvents as _$delegateEvents } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";
import { addEventListener as _$addEventListener } from "solid-js/web";
import { createComponent as _$createComponent } from "solid-js/web";
const _tmpl$ = /*#__PURE__*/_$template(`<nav class="pagination-bar pagination-bar_theme_1"><div class="pagination-bar__filter pagination-bar__filter_theme_1"><img class="funnel-icon funnel-icon_theme_1" src="./src/assets/funnel.svg"><h4 class="button2-like button2-like_theme_1">filter by categoriy</h4></div><div class="pagination-bar__controls pagination-bar__controls_theme_1"><div class="pagination-bar__numbers pagination-bar__numbers_theme_1"></div></div><div class="pagination-bar__add-article pagination-bar__add-article_theme_1"><img class="funnel-icon funnel-icon_theme_1" src="./src/assets/add-article-2.png"><h4 class="button2-like button2-like_theme_1">add article</h4></div></nav>`, 16);
var PaginationBar, numbers;
import PageNumber from '../PageNumber/page-number.jsx';
import './pagination-bar_theme_1.less';
import './funnel-icon_theme_1.less';
import { ONE, u, cl } from 'raffinade';
numbers = function (numbeRange /*: {from: number, to: number}  */, hightLightPages /*: number */, pageNumBtnClickHandler /*: Function */) {
  var i, number, ref, ref1, results;
  results = [];
  for (number = i = ref = numbeRange.from, ref1 = numbeRange.to; ref <= ref1 ? i <= ref1 : i >= ref1; number = ref <= ref1 ? ++i : --i) {
    results.push(_$createComponent(PageNumber, {
      number,
      hightLightPages,
      pageNumBtnClickHandler
    }));
  }
  return results;
};
export default PaginationBar = function (props /*: any */) /*: HTMLElement */{
  var addClickHandler /*: Function */, filterClickHandler /*: Function */, hightLightPages /*: Function */, numbeRange /*: any */;
  numbeRange = {
    from: ONE,
    to: props.articlesGet.articles._meta.pageCount
  };
  hightLightPages = function (v /*: void */) /*: string */{
    var cp;
    return cp = props.articlesGet.articles._meta.currentPage;
  };
  filterClickHandler = function (evt /*: Event */) /*: void */{
    props.scrollUp();
    props.categoriesState.set(props.categoriesState.get() === 'folded' ? 'unfolded' : 'folded');
    return u;
  };
  addClickHandler = function (evt /*: Event */) /*: void */{
    props.modeSet(props.modeGet() === 'list' ? 'edit' : 'list');
    return u;
  };
  return (() => {
    const _el$ = _tmpl$.cloneNode(true),
      _el$2 = _el$.firstChild,
      _el$3 = _el$2.nextSibling,
      _el$4 = _el$3.firstChild,
      _el$5 = _el$3.nextSibling;
    _$addEventListener(_el$2, "click", filterClickHandler, true);
    _$insert(_el$3, () => props.PaginationButtonBack, _el$4);
    _$insert(_el$4, () => numbers(numbeRange, hightLightPages, props.pageNumBtnClickHandler));
    _$insert(_el$3, () => props.PaginationButtonForward, null);
    _$addEventListener(_el$5, "click", addClickHandler, true);
    return _el$;
  })();
};
_$delegateEvents(["click"]);