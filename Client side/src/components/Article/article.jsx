/* @flow */
var Article/*: Function */;

import Credits from '../Credits/credits.jsx';

import Categories from '../Categories/categories.jsx';

import './articles_theme_1.less';

export default Article = function(props/*: any */)/*: HTMLElement */ {
  return <div className='article-container'>
        <article className='article article_theme_1 article_corner_rounded_3'>

            <Credits title={props.title} author={props.author} dateTime={props.dateTime} />

            <div className='article-element article-element_theme_1'>
                {props.text}
            </div>

            <Categories categoryTitle={props.categoryTitle} />
        </article>
    </div>;
};
