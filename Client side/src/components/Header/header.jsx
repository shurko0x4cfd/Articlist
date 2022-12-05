/* @flow */

var Header;

import './theme_1.less';

export default Header = function() {
  return <header className='header header_theme_1'>
		<div className='header__body header__body_theme_1'>
			<div className='header__logo-side header__logo-side_theme_1'>
				<div className='header__logo header__logo_theme_1'>
                    <p>LOGO</p><p>TYPE</p>
                </div>
            </div>
            <div className='header__title header__title_theme_1'>
                Header Name
            </div>
        </div>
    </header>;
};
