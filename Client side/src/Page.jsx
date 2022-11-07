
import { createSignal } from "solid-js";
import './Page.css';
import './assets/funnel.svg';
import './assets/add-article.png';


const state =
{
	mode: 'list', // 'edit',
	selectCategoriesSide: 'unfolded',
	storedTitle: 'Enter new article name there',
	storedAuthorname: 'Enter your name there',
	storedText: '',
	addCategory:
		[
			{ id: 'id1', name: 'name1', label: 'Category 1', value: 'value1', checked: false },
			{ id: 'id2', name: 'name2', label: 'Category 2', value: 'value2', checked: true }
		],
	hasCategory:
		[
			{ id: 'id3', name: 'name3', label: 'Category 3', value: 'value3', checked: false },
			{ id: 'id4', name: 'name4', label: 'Category 4', value: 'value4', checked: true }
		],
}

const [stateGet, stateSet] = createSignal(state);


function Page() {
	const [modeGet, modeSet] = createSignal('list');
	const [selectCategoriesSideGet, selectCategoriesSideSet] =
		createSignal('unfolded');

	const isList = () => modeGet() === 'list';
	const categories = () =>
		isList() ? stateGet().hasCategory : stateGet().addCategory;
	const drawSelectCategoriesSide = () => modeGet() === 'edit' ||
		selectCategoriesSideGet() !== 'folded';

	return (
		<div className='page'>
			<Header />
			{isList() ? <PaginationBar
				selectCategoriesSideSet={selectCategoriesSideSet}
				selectCategoriesSideGet={selectCategoriesSideGet}
				modeGet={modeGet}
				modeSet={modeSet}
			/> : ''}
			{drawSelectCategoriesSide() ?
				<SelectCategoriesSide categories={categories}
					mode={modeGet}
					draw={drawSelectCategoriesSide}
				/> : ''}
			{isList() ? <List categories={categories} /> :
				<NewArticle text={modeGet()} title={stateGet().storedTitle}
					author={stateGet().storedAuthorname} modeSet={modeSet}
				/>}

			{isList() ? <PaginationBar
				selectCategoriesSideSet={selectCategoriesSideSet}
				selectCategoriesSideGet={selectCategoriesSideGet}
				modeGet={modeGet}
				modeSet={modeSet}
			/> : ''}
			<Footer />
		</div>);
}


function Header() {
	return (
		<div className='header'>
			<header className='header header__body header__body_theme_1'>
				<div class='header header__logo-side header__logo-side_theme_1'>

					<div class='header header__logo header__logo_theme_1'>
						<p>LOGO</p><p>TYPE</p>
					</div>
				</div>
				<div class='header header__title header__title_theme_1'>
					Header Name
				</div>
			</header>
		</div>);
}


function Footer() {
	return (
		<div className='footer'>
			<footer className='footer footer__body footer__body_theme_1'>
				{/* Footer */}
			</footer>
		</div>);
}


function List(props) {
	const articles =
		[
			<Article text={loremIpsum} title='First article name'
				author='Alexander Stadnichenko' dateTime='6 November 2022'
				categories={props.categories()} />,
			<Article text={loremIpsum} title='Second article name'
				author='Alexander Stadnichenko' dateTime='6 November 2022'
				categories={props.categories()} />
		];
	return (
		<div className='list list_theme_1'>
			<div className='list list__body_theme_1'>
				{articles.map(itm => itm)}
			</div>
		</div>);
}

function NewArticle(props) {
	return (
		<div>
			<div className='new-article new-article_theme_1'>
				<div className='new-article new-article__body_theme_1'>
					<EditableArticle text={props.text}
						title={props.title} author={props.author}
						dateTime='6 November 2022'
						modeSet={props.modeSet}
					/>
				</div>
			</div>
		</div>

	);
}

function EditableArticle(props) {
	return (
		<div className='editable-article-container'>
			<article className='editable-article article_theme_1 
				editable-article_theme_1 article_corner_rounded_3'>

				<EditableCredits title={props.title} author={props.author}
					dateTime={props.dateTime} />

				<textarea type='text' className='editable-article editable-article__body
					editable-article__body_theme_1' value={props.text}
					placeholder='Start article writing there...' />

				<MenuSend modeSet={props.modeSet} />
			</article>
		</div>);
}


function MenuSend(props) {
	return (
		<div className='menu-send menu-send_theme_1'>
			<div className='menu-send menu-send__buttons menu-send__buttons_theme_1'>
				<div className='menu-send menu-send__button_theme_1 
					menu-send__button-cancel_theme_1'
					onClick={props.modeSet.bind(null, 'list')}>

					Cancel
				</div>
				<div className='menu-send menu-send__button_theme_1 
					menu-send__button-send_theme_1'>

					Send
				</div>
			</div>
		</div>);
}


function EditableCredits(props) {
	return (
		<div className='credits-container'>
			<header className='credits credits__theme_1'>
				<input placeholder={props.title} className='credits credits__title 
					credits__editable-title_theme_1' />
				<div className='credits credits__info credits__info_theme_1'>
					<div className='credits credits__author credits__author_theme_1'>

						<div className='credits credits__author-header 
							credits__author-header_theme_1'>

							<h4>Author:</h4>
						</div>
						<input className='credits credits__editable-author-name 
							credits__editable-author-name_theme_1'
							placeholder={props.author} />
					</div>
				</div>
			</header>
		</div>);
}

function Article(props) {
	return (
		<div className='article-container'>
			<article className='article article_theme_1 
				article_corner_rounded_3'>

				<Credits title={props.title} author={props.author}
					dateTime={props.dateTime} />

				<div className='article article-element article-element_theme_1'>
					{props.text}
				</div>
				<Categories list={props.articleCategories || []} />
			</article>
		</div>);
}


function Credits(props) {
	return (
		<div className='credits-container'>
			<header className='credits credits__theme_1'>
				<h1 className='credits credits__title credits__title_theme_1'>
					{props.title}
				</h1>
				<div className='credits credits__info credits__info_theme_1'>
					<div className='credits credits__author credits__author_theme_1'>
						<div className='credits credits__author-header 
						credits__author-header_theme_1'>

							<h4>Author:</h4>
						</div>
						<div>{props.author}</div>
					</div>
					<div className='credits credits__published-at 
					credits__published-at_theme_1'>

						<div className='credits credits__published-at-header 
						credits__published-at-header_theme_1'>

							<h4>Published At:</h4>
						</div>
						<div>{props.dateTime}</div>
					</div>
				</div>
			</header>
		</div>);
}


function Categories(props) {
	return (
		<div className='categories-container'>
			<div className='categories categories_theme_1'>
				<div className='categories categories__header categories__header_theme_1'>
					<h4>Categories:</h4>
				</div>
				<CategoriesList list={props.list} />
			</div>
		</div>);
}


function CategoriesList(props) {
	let list = props.list.map(itm => <Tag category={itm} />);
	list = list.length ? list : <Tag category={{ label: 'none' }} />;

	return (
		<div className='categories-list'>
			<div className='categories-list categories-list__body 
				categories-list__body_theme_1'>

				{list}
			</div>
		</div>);
}


function Tag(props) {
	return (
		<div className='tag'>
			<div className='tag tag__text tag__text_theme_1'>
				{'#' + props.category.label}
			</div>
		</div>);

}


function PaginationBar(props) {
	const numbeRange = { from: 1, to: 10 };

	const clickHandler = () => {
		let state = props.selectCategoriesSideGet();
		state = state === 'folded' ? 'unfolded' : 'folded';
		props.selectCategoriesSideSet(state);
	}

	const clickHandler2 = () => {
		let state = props.modeGet();
		state = state === 'list' ? 'edit' : 'list';
		props.modeSet(state);
		console.log('Zxcv');
	}

	return (
		<div className={'pagination-bar pagination-bar_theme_1'}>
			<div className='pagination-bar__filter' onClick={clickHandler}>
				<img className='funnel-16' src='./src/assets/funnel.svg' />
				<h4 className='button2-like button2-like_theme_1'>
					filter by categoriy
				</h4>
			</div>
			<div className='pagination-bar__controls'>
				<PaginationButtonBack />

				<div className='pagination-bar__numbers'>
					{numbers(numbeRange)}
				</div>

				<PaginationButtonForward />
			</div>
			<div className='pagination-bar__add-article' onClick={clickHandler2}>
				<img className='funnel-16' src='./src/assets/add-article-2.png' />
				<h4 className='button2-like button2-like_theme_1'>
					add article
				</h4>
			</div>
		</div>);
}


function numbers(numbeRange) {
	const numbers = [];
	for (let number = numbeRange.from; number <= numbeRange.to; number++) {
		numbers.push(<PageNumber number={number} />)
	}

	return numbers;
}


function PageNumber(props) {
	return (
		<div className='page-number-container'>
			<div className='page-number'>
				<div className='page-number page-number_theme_1 
					button-like button-like_theme_1'>
					{props.number}
				</div>
			</div>
		</div>);
}

// 
function PaginationButtonBack() {
	return (
		<div className='pgb-back-container'>
			<div className='pgb-back'>
				<div className='pgb-back page-number_theme_1 
					pgb-back__item-back pgb-back__item-back_theme_1 
						button-like button-like_theme_1'>

					{'🢐🢐🢐 prev'}
				</div>
			</div>
		</div>);
}

function PaginationButtonForward() {
	return (
		<div className='pgb-forward-container'>
			<div className='pgb-forward'>
				<div className='pgb-forward page-number_theme_1 
					pgb-forward__item-forward pgb-forward__item-forward_theme_1 
						button-like button-like_theme_1'>

					{'next 🢒🢒🢒'}
				</div>
			</div>
		</div>);
}

function SelectCategoriesSide(props) {
	const hidden = () =>
		props.draw() ? '' : ' hidden ';

	const categoryItems = props.categories().map(itm =>
		<CategoryItem id={itm.id} value={itm.value} name={itm.name}
			label={itm.label} checked={itm.checked} />);

	return (
		<div className={'select-categories select-categories_theme_1' + hidden()}>
			<div className='select-categories select-categories__items 
					select-categories__items_theme_1'>

				{categoryItems}
				{props.mode() === 'edit' ? '' : <MenuFilter />}
			</div>
		</div>);
}


function MenuFilter() {
	return (
		<div className='menu-filter menu-filter_theme_1'>
			<div className='menu-filter menu-filter__button_theme_1 
				menu-filter__button_cancel_theme_1'>

				Cancel
			</div>
			<div className='menu-filter menu-filter__button_theme_1  
				menu-filter__button_theme_1 menu-filter__button-apply_theme_1'>

				Apply
			</div>
		</div>
	);
}


function CategoryItem(props) {
	return (
		<div>
			<div className='category-item category-item_theme_1'>
				<input type='checkbox' id={props.id} name={props.name}
					value={props.value} checked={props.checked} />
				<label className='category-item category-item__label 
					category-item__label_theme_1' for={props.id}>
					{props.label}</label>
			</div>
		</div>);
}




const loremIpsum =
	`Lorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.`;


export default Page;
