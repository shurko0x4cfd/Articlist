### @flow ###

import './tag__text_theme_1.less'


export default Tag = (props ###: any ###) ###: HTMLElement ### ->
	<div className='tag'>
		<div className='tag__text tag__text_theme_1'>
			<Show when={props.label != 'none'}
				fallback={(v ###: void ###) ###: string ### -> 'none'}>
					{'#' + props.label}
			</Show>
		</div>
	</div>
