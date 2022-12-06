/* @flow */
var PageNumber;

import './page-number_theme_1.less';

export default PageNumber = function(props/*: any */)/*: HTMLElement */ {
  var hightlighted, pageNumBtnClickHandler;
  ({pageNumBtnClickHandler} = props);
  hightlighted = function() {
    if (props.hightLightPages() === props.number.toString()) {
      return ' highlighted-button ';
    } else {
      return '';
    }
  };
  return <button className={'button-like button-like_theme_1 ' + hightlighted()} tabindex='0' onClick={pageNumBtnClickHandler} onKeyDown={pageNumBtnClickHandler}>
		<div className='page-number page-number_theme_1'>
			{props.number}
		</div>
	</button>;
};
