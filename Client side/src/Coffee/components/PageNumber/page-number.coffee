### @flow ###

import './page-number_theme_1.less'


export default PageNumber = (props ###: any ###) ###: HTMLElement ### ->
	{ pageNumBtnClickHandler } = props

	hightlighted = -> # ! сравнение должно быть нестрогое
		if props.hightLightPages() == props.number.toString()
		then ' highlighted-button '
		else ''

	<div className='page-number-container'>
		<div className='page-number page-number_theme_1'>
			<a className={'button-like button-like_theme_1 ' + hightlighted()}
				role='button'
				tabindex='0'
				onClick={pageNumBtnClickHandler}
				onKeyDown={pageNumBtnClickHandler}>

				{props.number}
			</a>
		</div>
	</div>
