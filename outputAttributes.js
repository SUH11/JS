/*
  输出某个元素中的attributes
*/
function outputAttribute(element) {
	var pairs = [],
		attrName,
		attrValue,
		i,
		len;

	for ( i = 0, len = element.attributes.length; i < len; i ++ ) {
		attrName = element.attributes[i].nodeName;
		attrValue = element.attributes[i].nodeValue;
		if ( element.attributes[i].specified ) {
			pairs.push( attrName + '=\'' + attrValue + '\'');
		}
	}
	return pairs.join(' ');
}
