/* @flow */
var Header/*: Function */;

import './header_theme_1.less';

import '../shared/mixin-blocks/placer.less';

import '../shared/mixin-blocks/sizer.less';

export default Header = function(props/*: any */)/*: HTMLElement */ {
  return <header className={'header header_theme_1 ' + props.cNames}>
		<div className='header__logo header__logo_theme_1'>
			<p>LOGO</p><p>TYPE</p>
		</div>
		<div className='header__title header__title_theme_1 placer__margin-left placer__margin-left_64px'>
			Header Name
		</div>
	</header>;
};
