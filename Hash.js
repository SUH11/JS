// 散列

function HashTable() {
	this.table = new Array(137);
	this.simpleHash = simpleHash;
	this.showDistro = showDistro;
	this.put = put;
	// this.get = get;
}

function simpleHash(data) {
	var total = 0;
	const H = 37;	// 乘一个质数，减少发生碰撞
	for (var i = 0; i < data.length; i ++) {
		total += H * total + data.charCodeAt(i);
	}
	return total % this.table.length;
}

function put(data) {
	var pos = this.simpleHash(data);
	this.table[pos] = data;
}

function showDistro() {
	Object.keys(this.table).forEach(function(key) {
		console.log(key + ' : ' + this.table[key]);
	}, this);
}

var h = new HashTable();
h.put('suhong');
h.showDistro();


function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}




























