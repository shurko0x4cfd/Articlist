### @flow ###

import './editable-credits_theme_1.less'


export default EditableCredits ###: Function ### = \
	(props ###: any ###) ###: HTMLElement ### ->

	<header className='credits credits_theme_1'>
		<input placeholder={props.title}
			className='credits__title credits__editable-title 
				credits__editable-title_theme_1' />
		<div className='credits__info credits__info_theme_1'>
			<div className='credits__author credits__author_theme_1'>

				<div className='credits__author-header 
					credits__author-header_theme_1'>
						<h4>Author:</h4>
				</div>
				<input className='credits__editable-author-name 
					credits__editable-author-name_theme_1'
					placeholder={props.author} />
			</div>
		</div>
	</header>
