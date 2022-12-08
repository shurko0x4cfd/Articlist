/* @flow */
var MenuFilter/*: Function */;

import './menu-filter_theme_1.less';

export default MenuFilter = function(props/*: any */)/*: HTMLElement */ {
  var apply, cancel;
  ({cancel, apply} = props);
  return <menu className='menu-filter menu-filter_theme_1'>
		<a className='menu-filter__button_theme_1 menu-filter__button_cancel_theme_1' role='button' tabindex='0' onClick={cancel} onKeyDown={cancel}>
				Cancel
		</a>
		<a className='menu-filter__button_theme_1 menu-filter__button-apply_theme_1' role='button' tabindex='0' onClick={apply} onKeyDown={apply}>
				Apply
		</a>
	</menu>;
};

// a -> button
// css [role="button"]:focus {outline: none;} ?
