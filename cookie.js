/*
    作用：存放cookie
    参数：key
          value
          t，以天数为单位
    返回值：无（默认是undefined）
*/
function setCookie( key, value, t ) {
    var oDate = new Date();
    oDate.setDate( oDate.getDate() + t );
    //document.cookie = key + '=' + encodeURI( value ) + ';expires=' + oDate.toGMTString();
    document.cookie = key + '=' + encodeURI( value ) + ';expires=' + oDate.toUTCString();
}

/*
    作用：获取cookie
    参数：key
    返回值： value（字符串）
*/
function getCookie( key ) {
    var arr1 = document.cookie.split('; ');
    for ( var i = 0; i < arr1.length; i ++ ) {
        var arr2 = arr1[i].split('=');
        if ( arr2[0] == key ) {
            return decodeURI( arr2[1] );
        }
    }
}

/*
    作用：移除cookie
    参数：key
    返回值：无（默认是undefined）
*/
function removeCookie( key ) {
    setCookie( key, '', -1 );
}
