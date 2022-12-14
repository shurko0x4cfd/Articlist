### @flow ###

import { noop, cl, u, first } from 'raffinade'


homeUrl  ###: string ### = 'http://localhost:4000/web/index.php?r=article/'
fetchUrl ###: string ### = 'loadart'
storeUrl ###: string ### = 'storeart'


ajax ###: Function ### = (
	onSucceess ###: Function ### = noop,
	url        ###: string ###   = fetchUrl,
	method     ###: string ###   = 'GET',
	data       ###: any ###      = {},
	onFail     ###: Function ### = (xhr ###: any ###) -> cl xhr) ###: void ### ->

	data = JSON.stringify data if typeof data != 'string'

	url ###: string ### = homeUrl + url
	xhr = new XMLHttpRequest
	xhr.open method, url, true
	xhr.onreadystatechange =
		(v ###: void ###) ###: void ### ->
			return if xhr.readyState != 4

			if xhr.status != 200
				onFail xhr 
			else
				onSucceess xhr
	xhr.send data
	u


mapp ###: Function  ### = (obj ###: any ###,
	method ###: string  ###, ...args ###: Array<any> ###) ###: mixed  ### ->
	obj[method] ...args


# Due to tech troubles still cant keep block comments in produced code
# therefore used `` for annotations, but this require some postprocessing
`// ^\s*\*/;\s*$\n -> */\n`

`/**
 * 
 * @return {mixed}
 */`
scroll ###: Function  ### = (...args ###: Array<mixed> ###,
		obj ###: any ###) ###: mixed ### ->
	mapp obj, 'scroll', ...args


`/**
 * 
 * @param  {string} tagname
 * @return {number}
 */`
scrollUp ###: Function ### = (tagname ###: string ### = 'html') ###: TimeoutID ### ->
	setTimeout (v ###: void ###) ###: mixed ### ->
		scroll 0, 0, first document.getElementsByTagName tagname


loremIpsum ###: string ### =
	'Lorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat'


export { homeUrl, fetchUrl, storeUrl, ajax, scrollUp, loremIpsum }
