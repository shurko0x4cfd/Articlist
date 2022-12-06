### @flow ###

import './page-number_theme_1.less'


export default PageNumber = (props ###: any ###) ###: HTMLElement ### ->
	{ pageNumBtnClickHandler } = props

	hightlighted = ->
		if props.hightLightPages() == props.number.toString()
		then ' highlighted-button '
		else ''

	<button className={'button-like button-like_theme_1 ' + hightlighted()}
		tabindex='0'
		onClick={pageNumBtnClickHandler}
		onKeyDown={pageNumBtnClickHandler}>
		<div className='page-number page-number_theme_1'>
			{props.number}
		</div>
	</button>
