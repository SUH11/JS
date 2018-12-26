// 二叉查找树 遍历：栈的思想
function Node(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
}

function show() {
	return this.data;
}

function BST() {
	this.root = null;
	this.insert = insert;
	this.inOrder = inOrder;
	this.preOrder = preOrder;
	this.postOrder = postOrder;
	this.getMin = getMin;
	this.getMax = getMax;
	this.remove = remove;
}

function insert(data) {
	var n = new Node(data, null, null);
	if (this.root == null) {
		this.root = n;
	} else {
		var current = this.root;
		var parent;
		while (true) {
			parent = current;
			if (data < current.data) {
				current = current.left;
				if (current == null) {
					parent.left = n;
					break;
				}
			} else {
				current = current.right;
				if (current == null) {
					parent.right = n;
					break;
				}
			}
		}
	}
}

// 中序遍历 数据从小到大遍历
function inOrder(node) {
	if (!(node == null)) {
		inOrder(node.left);
		console.log(node.show());
		inOrder(node.right);
	}
}

// 先序遍历
function preOrder(node) {
	if (!(node == null)) {
		console.log(node.show());
		preOrder(node.left);
		preOrder(node.right);
	}
}

// 后续遍历
function postOrder(node) {
	if(!(node == null)) {
		postOrder(node.left);
		postOrder(node.right);
		console.log(node.show());
	}
}


function getMin() {
	var current = this.root;
	while (!(current == null)) {
		current = current.left;
	}
	return current.data;
}

function getMax() {
	var current = this.root;
	while (!(current == null)) {
		current = current.right;
	}
	return current.data;
}

function find(data) {
	var current = this.root;
	while (!(current == null)) {
		if (data == current.data) {
			return current;
		} else if (data > current.data) {
			current = current.right;
		} else {
			current = current.left;
		}
	}
	return null;
}

function remove(data) {
	root = removeNode(this.root, data);
}

function removeNode(node, data) {
	if (node == null) {
		return null;
	}
	// 当前节点
	if (node.data == data) {
		// 没有节点
		if (node.left == null && node.right == null) {
			return null;
		}
		if (node.left == null) {
			return node.right;
		}
		if (node.right == null) {
			return node.left;
		}

		var tempNode = getSmallest(node.right);
		node.data = tempNode.data;
		node.right = removeNode(node.right, data);
		return node;
	} else if (node.data > data) {
		node.left = removeNode(node.left, data);
	} else {
		node.right = removeNode(node.right, data);
	}
}

function getSmallest(node) {
	while(!(node == null)) {
		node = node.left;
	}
	return node;
}

function Count() {
	var node = this.root;
	return getCount(this.root);
}

function getCount(node) {
	if (node == null) {
		return 0;
	}
	return getCount(node.left) + getCount(node.right) + 1;
}
























