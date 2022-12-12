### @flow ###

import './article_theme_1.less'
import '../shared/mixin-blocks/placer.less'
import Credits from '../Credits/credits.jsx'
import Categories from '../Categories/categories.jsx'


export default Article ###: Function ### = \
        (props ###: any ###) ###: HTMLElement ### ->

    <article className={'article article_theme_1 ' + props.cNames}>

        <Credits title={props.title} author={props.author}
            dateTime={props.dateTime} />

        <div className='article__text article__text_theme_1'>
            {props.text}
        </div>

        <Categories categoryTitle={props.categoryTitle} />
    </article>
