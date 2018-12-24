// 循环链表解决约瑟夫问题

function Node(element) {
	this.element = element;
	this.next = null;
}

function LLink() {
	this.head = new Node('head');
	this.head.next = this.head;
	this.find = find;
	this.insert = insert;
	this.findPrevious = findPrevious;
	this.remove = remove;
	this.currentNode = this.head;
	this.advance = advance;
	this.count = count;
	this.display = display;
}

function find(item) {
	var currNode = this.head;
	console.log(currNode);
	while (currNode.element != item) {
		currNode = currNode.next;
	}
	return currNode;
}

// 插到某个元素的后面
function insert(newElement, item) {
	var newNode = new Node(newElement);
	var currNode = this.find(item);
	newNode.next = currNode.next;
	currNode.next = newNode;
}

function findPrevious(item) {
	var currNode = this.head;
	while(!(currNode.next == null) && (currNode.next.element != item)) {
		currNode = currNode.next;
	}
	return currNode;
}

function remove(item) {
	var prevNode = this.findPrevious(item);
	if (prevNode.next !== null) {
		prevNode.next = prevNode.next.next;
	}	
}

// 向前移动n个节点
function advance(n) {
	while (n > 0) {
		if (this.currentNode.next.element == 'head') {
			this.currentNode = this.currentNode.next.next;
		} else {
			this.currentNode = this.currentNode.next;
		}
		n --;
	}
}

function count() {
	var currNode = this.head;
	var count = 0;
	while(currNode.next.element != 'head') {
		count ++;
		currNode = currNode.next;
	}
	return count;
}

function display() {
	var currNode = this.head;
	while((currNode.next != null) && (currNode.next.element != 'head')) {
		console.log('currNode.next.element', currNode.next.element);
		currNode = currNode.next;
	}
}

var person = new LLink();
person.insert('1','head');
person.insert('2', '1');
person.insert('3', '2');
person.insert('4' , '3');
person.insert('5' , '4');
person.insert('6' , '5');
person.insert('7' , '6');
person.insert('8' , '7');
person.insert('9' , '8');
person.insert('10' , '9');


person.display();


var n = 3;
while (person.count() > 2){
 person.advance(n);
 person.remove(person.currentNode.element);
 console.log('----left----')
 person.display();
}

































