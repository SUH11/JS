// 定义字典类
function Dictionary() {
	this.dataStore = [];
	this.add = add;
	this.find = find;
	this.remove = remove;
	this.showAll = showAll;
}

function add(key, value) {
	this.dataStore[key] = value;
}

function find(key) {
	return this.dataStore[key];
}

function remove(key) {
	delete this.dataStore[key];
}

function showAll() {
	const keys = Object.keys(this.dataStore).sort();
	for (var key in keys) {
		console.log(keys[key] + '->' + this.dataStore[keys[key]]);
	}
}

function count() {
	return Object.keys(this.dataStore).length;
}

function clear() {
	for (var key in Object.keys(this.dataStore)) {
		delete this.dataStore[key];
	}
}

var pbook = new Dictionary();
pbook.add('suhong', '123');
pbook.add('auhong', '1123');

pbook.showAll();


var str = 'Learn English Composition Complete, English Composition Network provides English Composition Model, Senior English Composition, Junior English Composition, Primary English Composition, CET-4 and CET-6 Composition, English Composition Template, English Composition Topics, etc. Aim To improve the English reading of the vast number of netizens';
var arrStr = str.split(/[,]?[.]?[\s+]{1,}?/);

var pStr = new Dictionary();

for (var i = 0; i < arrStr.length; i ++) {
	var key = arrStr[i];
	if (pStr.find(key)) {
		pStr.add(key, pStr.find(key)+1);
	} else {
		pStr.add(key, 1);
	}
}

pStr.showAll();








