// 链表
function Node(element) { // 返回一个链表节点
	this.element = element;
	this.next = null;
}

function LLink() {
	this.head = new Node('head');
	this.head.next = this.head;
	this.find = find;
	this.insert = insert;
	this.remove = remove;
	this.display = display;
}

function find(item) {
	var currentNode = this.head;
	while(currentNode.element != item) {
		currentNode = currentNode.next;
	}
	return currentNode;
}

function insert(newElement, item) {
	var newNode = new Node(newElement);
	var current = this.find(item);
	newNode.next = current.next;
	current.next = newNode;
}

function display() {
	var currentNode = this.head;
	while(!(currentNode.next == null) && !(currentNode.next.element == 'head')) {
		console.log(currentNode.next.element);
		currentNode = currentNode.next;
	}
}

function findPrevious(item) {
	var currentNode = this.head;
	while(!(currentNode == null) && currentNode.next.element != item) {
		currentNode = currentNode.next;
	}
	return currentNode;
}

function remove(element) {
	var prevNode = findPrevious(element);
	if (!(prevNode.next == null)) {
		prevNode.next = element.next;
	}
}

var people = new LLink();
people.insert('0', 'head');
people.insert('1', 'head');
people.insert('2', 'head');
people.insert('3', 'head');
people.insert('4', 'head');
people.insert('5', 'head');
people.insert('6', 'head');
people.insert('7', 'head');
people.insert('8', 'head');
people.insert('9', 'head');
people.insert('10', 'head');





