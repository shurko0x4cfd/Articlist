/* @flow */
var PageNumber;

import './page-number_theme_1.less';

export default PageNumber = function(props/*: any */)/*: HTMLElement */ {
  var hightlighted, pageNumBtnClickHandler;
  ({pageNumBtnClickHandler} = props);
  hightlighted = function() { // ! сравнение должно быть нестрогое
    if (props.hightLightPages() === props.number.toString()) {
      return ' highlighted-button ';
    } else {
      return '';
    }
  };
  return <div className='page-number-container'>
		<div className='page-number page-number_theme_1'>
			<a className={'button-like button-like_theme_1 ' + hightlighted()} role='button' tabindex='0' onClick={pageNumBtnClickHandler} onKeyDown={pageNumBtnClickHandler}>

				{props.number}
			</a>
		</div>
	</div>;
};
