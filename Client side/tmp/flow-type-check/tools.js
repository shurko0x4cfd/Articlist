
var ajax /*: Function */,
  fetchUrl /*: string */,
  homeUrl /*: string */,
  loremIpsum /*: string */,
  mapp /*: Function  */,
  scroll /*: Function  */,
  scrollUp /*: Function */,
  storeUrl /*: string */,
  splice = [].splice;
import { noop, cl, u, first } from 'raffinade';
homeUrl = 'http://localhost:4000/web/index.php?r=article/';
fetchUrl = 'loadart';
storeUrl = 'storeart';
ajax = function (onSucceess /*: Function */ = noop, url /*: string */ = fetchUrl, method /*: string */ = 'GET', data /*: any */ = {}, onFail /*: Function */ = function (xhr /*: any */) {
  return cl(xhr);
}) /*: void */{
  var xhr;
  if (typeof data !== 'string') {
    data = JSON.stringify(data);
  }
  url = homeUrl + url;
  xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.onreadystatechange = function (v /*: void */) /*: void */{
    if (xhr.readyState !== 4) {
      return;
    }
    if (xhr.status !== 200) {
      return onFail(xhr);
    } else {
      return onSucceess(xhr);
    }
  };
  xhr.send(data);
  return u;
};
mapp = function (obj /*: any */, method /*: string  */, ...args /*: Array<any> */) /*: mixed  */{
  return obj[method](...args);
};

// Due to tech troubles still cant keep block comments in produced code
// therefore used `` for annotations, but this require some postprocessing
// ^\s*\*/;\s*$\n -> */\n;

/**
 * 
 * @return {mixed}
 */
;
scroll = function (...args /*: Array<mixed> */) /*: mixed */{
  var obj /*: any */, ref;
  ref = args, [...args] = ref, [obj] = splice.call(args, -1);
  return mapp(obj, 'scroll', ...args);
};

/**
 * 
 * @param  {string} tagname
 * @return {number}
 */
;
scrollUp = function (tagname /*: string */ = 'html') /*: TimeoutID */{
  return setTimeout(function (v /*: void */) /*: mixed */{
    return scroll(0, 0, first(document.getElementsByTagName(tagname)));
  });
};
loremIpsum = 'Lorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat';
export { homeUrl, fetchUrl, storeUrl, ajax, scrollUp, loremIpsum };