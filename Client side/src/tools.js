
/** Shortcut for console.log  */

const homeUrl = 'http://localhost:4000/web/index.php?r=article/';
const fetchUrl = 'loadart';
const storeUrl = 'storeart';


function ajax(onSucceess = () => { }, url = fetchUrl,
    method = 'GET', data = {}, onFail = xhr => cl(xhr)) {

    if (typeof data !== 'string')
        data = JSON.stringify(data);

    url = homeUrl + url;
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.onreadystatechange =
        () => {
            if (xhr.readyState != 4)
                return;

            if (xhr.status != 200)
                onFail(xhr)
            else
                onSucceess(xhr);
        };
    xhr.send(data);
}


export { homeUrl, fetchUrl, storeUrl, ajax };
