### @flow ###

import './list_theme_1.less'


export default List ###: Function ### = (props ###: any ###) ###: HTMLElement ### ->
	items   ###: Function ### = (v ###: void  ###) ###: Array<any> ### ->
		props.articlesGet.articles.items;

	<div className='list list_theme_1'>
		<div className='list__body list__body_theme_1'>
			{
				items().map (itm ###: any ###) ###: Array<HTMLElement> ### ->
					<props.Article text={itm.article}
						title={itm.title}
						author={itm.author}
						dateTime={itm.published_at}
						categories={props.categories()}
						categoryTitle={(itm.category || {}).title || 'none'}
						cNames=' placer__moveable_margin_16px '
					/>
			}
		</div>
	</div>
