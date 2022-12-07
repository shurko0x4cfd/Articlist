var Credits;

import '../../shared.less';

export default Credits = function(props/*: any */)/*: HTMLElement */ {
  return <header className='credits credits_theme_1'>
		<h1 className='credits__title credits__title_theme_1'>
			{props.title}
		</h1>
		<div className='credits__info credits__info_theme_1'>
			<div className='credits__author credits__author_theme_1'>
				<div className='credits__author-header credits__author-header_theme_1'>
						<h4>Author:</h4>
				</div>
				<div>{props.author}</div>
			</div>
			<div className='credits__published-at credits__published-at_theme_1'>
					<div className='credits__published-at-header credits__published-at-header_theme_1'>
					<h4>Published At:</h4>
				</div>
				<div>{props.dateTime}</div>
			</div>
		</div>
	</header>;
};
