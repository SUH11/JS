// 图
function Graph(v) { // v为顶点数
	this.vertices = v;
	this.edges = 0;
	this.adj = [];
	this.marked = [];
	for (var i = 0; i < this.vertices; i ++) {
		this.adj[i] = [];
		this.marked[i] = false;
	}
	this.addEdge = addEdge;
	this.showGraph = showGraph;
	this.dfs = dfs; // 深度优先搜索
	this.bfs = bfs; // 广度优先搜索

	this.edgeTo = [];
	this.pathTo = pathTo;
	this.hashPathTo = hashPathTo;
}

function addEdge(v, w) { // （1， 2） （2， 1）
	this.adj[v].push(w);
	this.adj[w].push(v);
	this.edges ++;
}

function showGraph() {
	console.log(this.adj);
	for (var i = 0; i < this.vertices; i ++) {
		var str = i + '->';
		for (var j = 0; j < this.vertices; j ++) {
			if (this.adj[i][j] != undefined) {
				str += ' ' + this.adj[i][j];
			}
		}
		console.log(str);
	}
}


function dfs(v) {
	this.marked[v] = true;
	if (this.adj[v] != undefined) {
		console.log('Visited vertex: ' + v);
	}
	for (var w in this.adj[v]) {
		if (!this.marked[this.adj[v][w]]) {
			this.dfs(this.adj[v][w]);
		}
	}
	this.adj[v].forEach(item => {
		if (!this.marked[item]) {
			this.dfs(item);			
		}
	})
}

function bfs(s) {
	var queue = [];
	this.marked[s] = true;
	queue.push(s);
	while(queue.length > 0) {
		var v = queue.shift();
		// if (this.adj[v] != undefined) {
		// 	console.log('Visited vertex: ' + v);
		// }
		if (v == undefined) {
			console.log('Visited vertex: ' + v);
		}
		this.adj[v].forEach(w => {
			if (!this.marked[w]) {
				this.edgeTo[w] = v;
				this.marked[w] = true;
				queue.push(w);
			}
		});
	}
}

function pathTo(v) {
	console.log('v:' + v);
	var source = 0;
	if (!this.hashPathTo(v)) {
		console.log(111);
		return undefined;
	} 
	var path = [];
	for (var i = v; i != source; i = this.edgeTo[i]) {
		path.push(i);
	}
	path.push(source);
	console.log('path', path);
	return path;
}

function hashPathTo(v) {
	console.log('this.marked[v]', this.marked[v])
	return this.marked[v];
}

var g = new Graph(5);

g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();

// console.log('----------dfs-------');
// g.dfs(0);
console.log('----------bfs-------');
g.bfs(0);

// 寻找最短路径
var vertex = 4;
var paths = g.pathTo(vertex);
var str = '';
while (paths.length > 0) {
	if (paths.length > 1) {
		str += paths.pop() + '-';
	} else {
		str += paths.pop();
	}
}
console.log(str);






