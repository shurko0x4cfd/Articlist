/* @flow */
var Tag;

import './tag__text_theme_1.less';

import '../shared/mixin-blocks/placer.less';

export default Tag = function(props/*: any */)/*: HTMLElement */ {
  return <div className={'tag ' + props.cNames}>
		<div className='tag__text tag__text_theme_1'>
			<Show when={props.label !== 'none'}>
				{'#' + props.label}
			</Show>
			<Show when={props.label === 'none'}>
				none
			</Show>
		</div>
	</div>;
};
