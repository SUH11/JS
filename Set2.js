// 数组实现集合
function Set() {
	this.dataStore = [];
	this.add = add;
	this.remove = remove;
	this.size = size;
	this.contains = contains;
	this.union = union; // 并集
	this.intersect = intersect; // 交集
	this.subset = subset; // 子集
	this.difference = difference; // 相对补集(属于A但不属于B)
	this.show = show;
}

function contains(data) {
	if (this.dataStore.indexOf(data) > -1) {
		return true;
	}
	return false;
}

function add(data) {
	if (this.dataStore.indexOf(data) < 0) {
		this.dataStore.push(data);
		return true;
	}
	return false;
}

function remove(data) {
	var pos = this.dataStore.indexOf(data);
	if (pos > -1) {
		this.dataStore.splice(pos, 1);
		return true;
	}
	return false;
}

function size() {
	return this.dataStore.length;
}

function union(set) {
	var tempSet = new Set();

	for (var i = 0; i < this.dataStore.length; i ++) {
		tempSet.add(this.dataStore[i]);
	}
	for (var i = 0; i < set.size(); i ++) {
		if (!tempSet.contains(set.dataStore[i])) {
			tempSet.add(set.dataStore[i]);
		}
	}
	return tempSet;
}

function intersect(set) {
	var tempSet = new Set();
	for (var i = 0; i < this.dataStore.length; i ++) {
		if (set.contains(this.dataStore[i])) {
			tempSet.add(this.dataStore[i]);
		}
	}
	return tempSet;
}

function subset(set) {
	if (this.dataStore.length < set.size()) {
		return false;
	}
	var tempSet = new Set();
	for (var i = 0; i < this.dataStore.length; i ++) {
		tempSet.add(this.dataStore[i]);
	}
	for (var i = 0; i < set.size(); i ++) {
		if (!tempSet.contains(set.dataStore[i])) {
			return false;
		}
	}
	return true;
}

function difference(set) {
	var tempSet = new Set();
	for (var i = 0; i < this.dataStore[i]; i ++) {
		if (!set.contains(this.dataStore[i])) {
			tempSet.add(this.dataStore[i]);
		}
	}
	return tempSet;
}

function show() {
	console.log(this.dataStore.join(', '));
}

var s1 = new Set();
s1.add('a');
s1.add('b');

var s2 = new Set();
s2.add('b');
s2.add('c');

s1.show();
s2.show();

s1.add('d');
s1.show();

console.log('-----并集-----');
s1.union(s2).show();
console.log('-----交集-----');
s1.intersect(s2).show();
console.log('-----子集-----');
console.log(s2.subset(s2));
console.log('-----相对补集-----');
s1.difference(s2).show();




















