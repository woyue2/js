// could be run on chrome 
function getQuery(queryStr) {
    var query = {};
    if (queryStr.indexOf('?') > -1) {
      var index = queryStr.indexOf('?');
      queryStr = queryStr.substr(index + 1);
      var array = queryStr.split('&');
      for (var i = 0; i < array.length; i++) {
        var tmpArr = array[i].split('=');
        if (tmpArr.length === 2) {
          query[tmpArr[0]] = tmpArr[1];
        }
      }
    }
    return query;
  }
  console.log(getQuery(location.search));
  console.log(getQuery(location.href));