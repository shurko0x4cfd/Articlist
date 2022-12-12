/* @flow */
var List/*: Function */;

import './list_theme_1.less';

export default List = function(props/*: any */)/*: HTMLElement */ {
  var items/*: Function */;
  items = function(v/*: void  */)/*: Array<any> */ {
    return props.articlesGet.articles.items;
  };
  return <div className='list list_theme_1'>
		<div className='list__body list__body_theme_1'>
			{items().map(function(itm/*: any */)/*: Array<HTMLElement> */ {
    return <props.Article text={itm.article} title={itm.title} author={itm.author} dateTime={itm.published_at} categories={props.categories()} categoryTitle={(itm.category || {}).title || 'none'} cNames=' placer__moveable_margin_16px ' />;
  })}
		</div>
	</div>;
};
