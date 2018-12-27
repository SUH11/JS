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

	this.gaps = [5, 3, 1];
	this.shellsort = shellsort; //希尔排序
	this.setGaps = setGaps;
	this.shellsort1 = shellsort1; // 动态设置间隔

	// 归并排序
	this.mergeSort = mergeSort;
	this.mergeArrays = mergeArrays;

	this.qSort = qSort; // 快排
	this.getQSort = getQSort;
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

function setGaps(arr) {
	this.gaps = arr;
}

function shellsort() {
	for (var g = 0; g < this.gaps.length; g ++) {
		for (var i = this.gaps[g]; i < this.dataStore.length; i ++) {
			var temp = this.dataStore[i];
			for (var j = i; j >= this.gaps[g] && this.dataStore[j - this.gaps[g]] > temp; j -= this.gaps[g]) {
				this.dataStore[j] = this.dataStore[j - this.gaps[g]];
			}
			this.dataStore[j] = temp;
		}
	}
}

function shellsort1() {
	var N = this.dataStore.length;
	var h = 1;
	while (h < N/3) {
		h = 3 * h + 1;
	}
	while (h >= 1) {
		for (var i = h; i < N; i ++) {
			for (var j = i; j >= h && this.dataStore[j] < this.dataStore[j - h]; j -= h) {
				swap(this.dataStore, j, j - h);
			}
		}
		h = (h - 1) / 3;
	}
}

// 非递归实现
function mergeSort(arr) {
	if (arr.length < 2) {
		return;
	}
	var step = 1;
	var left, right;
	while (step < arr.length) {
		left = 0;
		right = step;
		while (right + step <= arr.length) {
			mergeArrays(arr, left, left + step, right, right + step);
			left = right + step;
			right = left + step;
		}
		if (right < arr.length) {
			mergeArrays(arr, left, left + step, right, arr.length);
		}
		step *= 2;
	}
}

function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
	var rightArr = new Array(stopRight - startRight + 1);
	var leftArr = new Array(stopLeft - startLeft + 1);
	k = startRight;
	for (var i = 0; i < (rightArr.length - 1); i ++) {
		rightArr[i] = arr[k];
		k ++;
	}
	k = startLeft;
	for (var i = 0; i < (leftArr.length - 1); i ++) {
		leftArr[i] = arr[k];
		k ++;
	}
	rightArr[rightArr.length - 1] = Infinity; // 哨兵值
	leftArr[leftArr.length - 1] = Infinity;
	var m = 0;
	var n = 0;
	for (var k = startLeft; k < stopRight; k ++) {
		if (leftArr[m] <= rightArr[n]) {
			arr[k] = leftArr[m];
			m ++;
		} else {
			arr[k] = rightArr[n];
			n ++;
		}
	}
	console.log('left array - ', leftArr);
	console.log('right array - ', rightArr);
}

function qSort() {
	this.getQSort(this.dataStore);
}

function getQSort(arr) {
	if (arr.length === 0) {
		return [];
	}
	var left = [];
	var right = [];
	var point = arr[0];
	for (var i = 1; i < arr.length; i ++) {
		if (arr[i] < point) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return getQSort(left).concat([point], getQSort(right));
}

// console.time('获取数据');

var numElements = 1000;
var myNums = new CArray(numElements);
myNums.setData();

// var start = new Date().getTime();
// myNums.bubbleSort();
// var stop = new Date().getTime();
// var elapsed = stop - start;
// console.log(`对${numElements}个元素进行冒泡排序消耗的时间为：${elapsed}毫秒`);

// start = new Date().getTime();
// myNums.selectionSort();
// stop = new Date().getTime();
// elapsed = stop - start;
// console.log(`对${numElements}个元素进行选择排序消耗的时间为：${elapsed}毫秒`);

start = new Date().getTime();
myNums.insertionSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log(`对${numElements}个元素进行插入排序消耗的时间为：${elapsed}毫秒`);

start = new Date().getTime();
myNums.shellsort();
stop = new Date().getTime();
elapsed = stop - start;
console.log(`对${numElements}个元素进行希尔排序消耗的时间为：${elapsed}毫秒`);

start = new Date().getTime();
myNums.shellsort1();
// myNums.toString();
stop = new Date().getTime();
elapsed = stop - start;
console.log(`对${numElements}个元素进行希尔排序1消耗的时间为：${elapsed}毫秒`);


start = new Date().getTime();
myNums.qSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log(`对${numElements}个元素进行快排消耗的时间为：${elapsed}毫秒`);

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





























