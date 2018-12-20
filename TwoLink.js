// 双向链表
function Node(element) {
	this.element = element;
	this.next = null;
	this.previous = null;
}

function insert(newElement, item) {
	var newNode = new Node(newElement);
	var currentNode = find(item);
	newNode.next = currentNode.next;
	newNode.previous = currentNode;
	currentNode.next = newNode;
}

function find(item) {
	var currentNode = new Node(item);
	while(currentNode.element != item) {
		currentNode = currentNode.next;
	}
	return currentNode;
}

function remove(item) {
	var currentNode = find(item);
	if (!(currentNode.next == null)) {
		currentNode.previous.next = currentNode.next;
		currentNode.next.previous = currentNode.previous;
		currentNode.next = null;
		currentNode.previous = null;
	}
}

function findLast() {
	var currentNode = this.head;
	while(!(currentNode.next == null)) {
		currentNode = currentNode.next;
	}
	return currentNode;
}

function dispReverse() {
	var currentNode = findLast();
	while(!(currentNode.previous == null)) {
		console.log(currentNode.element);
		currentNode = currentNode.previous;
	}
}