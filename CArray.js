// 数组测试平台
function CArray(numElements) {
	this.dataStore = [];
	this.pos = 0;
	this.numElements = numElements;
	this.insert = insert;
	this.toString = toString;
	this.clear = clear;
	this.setData = setData;
	this.swap = swap;
	for (var i = 0; i < numElements; i ++) {
		this.dataStore[i] = i;
	}
	this.bubbleSort = bubbleSort; // 冒泡排序
	this.selectionSort = selectionSort; // 选择排序
	this.insertionSort = insertionSort; //插入排序
}

function setData() {
	for (var i = 0; i < this.numElements; i ++) {
		this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
	}
}


function clear() {
	for (var i = 0; i < this.dataStore.length; i ++) {
		this.dataStore[i] = 0;
	}
}

function insert(element) {
	this.dataStore[this.pos++] = element;
}

function toString() {
	var restr = '';
	for (var i = 0; i < this.dataStore.length; i ++) {
		restr += this.dataStore[i] + ' ';
		if (i > 0 & i % 10 == 0) {
			restr += '\n';
		}
	}
	// return restr;
	console.log(restr);
}

function swap(arr, index1, index2) {
	var temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}

// 冒泡排序
function bubbleSort() {
	var numElements = this.dataStore.length;
	var temp;
	for (var i = numElements; i >= 2; i --) {
		for (var j = 0; j <= i - 1; j ++) {
			if (this.dataStore[j] > this.dataStore[j +1]) {
				swap(this.dataStore, j, j + 1);
			}
		}
		// this.toString();
	}
}

// 选择排序
function selectionSort() {
	for (var i = 0; i < this.dataStore.length - 1; i ++) {
		for (var j = i + 1; j < this.dataStore.length; j ++) {
			if (this.dataStore[i] > this.dataStore[j]) {
				swap(this.dataStore, i, j);
			}	
		}
	}
}

function insertionSort() {
	var temp, inner;
	for (var outer = 1; outer < this.dataStore.length; outer ++) {
		temp = this.dataStore[outer];
		inner = outer;
		while (inner > 0 && (this.dataStore[inner - 1] >= temp)) {
			this.dataStore[inner] = this.dataStore[inner - 1];
			inner --;
		}
		this.dataStore[inner] = temp;
	}
}

// console.time('获取数据');

var numElements = 10000;
var myNums = new CArray(numElements);
myNums.setData();

var start = new Date().getTime();
myNums.bubbleSort();
var stop = new Date().getTime();
var elapsed = stop - start;
console.log(`对${numElements}个元素进行冒泡排序消耗的时间为：${elapsed}毫秒`);

start = new Date().getTime();
myNums.selectionSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log(`对${numElements}个元素进行选择排序消耗的时间为：${elapsed}毫秒`);

start = new Date().getTime();
myNums.insertionSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log(`对${numElements}个元素进行插入排序消耗的时间为：${elapsed}毫秒`);

// 插入最快 其次是选择 最后是冒泡

// console.log('set Data before: ');
// myNums.toString();
// console.log('------------- ');

// myNums.bubbleSort();
// console.log('bubbleSort after: ')
// myNums.toString();

// myNums.selectionSort();
// console.log('selectionSort after: ')
// myNums.toString();

// myNums.insertionSort();
// console.log('insertionSort after: ')
// myNums.toString();



// console.timeEnd('获取数据');





























