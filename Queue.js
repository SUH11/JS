function Queue() {
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;
}

function enqueue(element) {
	this.dataStore.push(element);
}

// function dequeue() {
// 	this.dataStore.shift();
// }

// 优先级队列,用code来标识优先级 越小优先级越高
function dequeue() {
	var entry = 0;
	for (var i = 0; i < this.dataStore.length; i ++) {
		if (this.dataStore[i].code < this.dataStore[entry].code) {
			entry = i;
		}
	}
	return this.dataStore.splice(entry, 1);
}

function front() {
	return this.dataStore[0];
}

function back() {
	return this.dataStore[this.dataStore.length - 1];
}

// 优先级队列的toString也要改
function toString() {
	var str = '';
	for (var i = 0; i < this.dataStore.length; i ++) {
		str += this.dataStore[i] + '\n';
	}
	return str;
}

function empty() {
	if (this.dataStore.length === 0) {
		return true;
	}
	return false;
}

// 优先级队列例子
function Patient(name, code) {
	this.name = name;
	this.code = code;
}

var p = new Patient('suhong', 5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient('suhong1', 1);
ed.enqueue(p);

console.log(ed.dequeue()); // suhong1

