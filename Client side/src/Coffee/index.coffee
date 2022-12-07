### @flow  ###
### @refresh reload ###
import { render } from 'solid-js/web';
import Page from './Page';
import { ajax } from "./tools";
import { first, u } from 'raffinade';


start ###: Function ### =
	(xhr ###: any ###) ###: void ### ->
		articles ###: any  ### = JSON.parse xhr.responseText

		# Bad patch. To fix
		articles._meta.currentPage = articles._meta.currentPage.toString u

		render (v ###: void ###) ###: Function ### -> <Page {...{articles}} />,
		first document.getElementsByClassName 'articlist-root-el'
		u

# Loading & mount of first page
ajax start
