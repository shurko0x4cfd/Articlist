/* @flow */
var Tag;

import './tag__text_theme_1.less';

export default Tag = function(props/*: any */)/*: HTMLElement */ {
  return <div className='tag'>
		<div className='tag__text tag__text_theme_1'>
			<Show when={props.label !== 'none'} fallback={function(v/*: void */)/*: string */ {
    return 'none';
  }}>
					{'#' + props.label}
			</Show>
		</div>
	</div>;
};
