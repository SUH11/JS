// 链表
function Node(element) { // 返回一个链表节点
	this.element = element;
	this.next = null;
}

function LLink() {
	this.head = new Node('head');
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
	while(!(currentNode.next == null)) {
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