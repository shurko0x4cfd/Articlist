### @flow  ###
### @refresh reload ###

import './components/shared/styles/reset.less'

import { render } from 'solid-js/web'
import Page from './components/Page/page.jsx'
import { ajax } from "./tools"
import { first, u } from 'raffinade'


start ###: Function ### =
	(xhr ###: any ###) ###: void ### ->
		articles ###: any  ### = JSON.parse xhr.responseText

		# Bad patch. To fix
		articles._meta.currentPage = articles._meta.currentPage.toString u

		render (v ###: void ###) ###: Function ### -> <Page {...{articles}} />,
		first document.getElementsByClassName 'articlist-437cc6d26ebe'
		u

# Loading & mount of first page
ajax start
