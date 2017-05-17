/*
	Set集合 ：存储独一无二的元素
	通过原型链的方式来实现的Set集合
*/
function Set() {
	this.dataStore = [];
}
Set.prototype = {
	constructor : Set,
	show : function() {
		return this.dataStore;
	},
	add : function(data) {
		if ( this.dataStore.indexOf(data) < 0 ) {
			this.dataStore.push(data);
			return true;
		}
		return fasle;
	},
	remove : function(data) {
		var pos = this.dataStore.indexOf(data);
		if ( pos > -1 ) {
			this.dataStore.splice(pos, 1);
			return true;
		}
		return false;
	},
	contains : function(data) {
		if ( this.dataStore.indexOf(data) > -1 ) {
			return true;
		}
		return false;
	},
	size : function() {
		return this.dataStore.length;
	},
	// 求并集，返回一个新的集合
	union : function(set) {
		var tempSet = new Set();

		for ( var i = 0; i < this.dataStore.length; i ++ ) {
			tempSet.add( this.dataStore[i] );
		}

		for ( var i = 0; i < set.dataStore.length; i ++ ) {
			if ( !tempSet.contains(set.dataStore[i]) ) {

				tempSet.add( set.dataStore[i] );
			}
		}

		return tempSet;

	},
	// 求交集
	intersect : function(set) {
		var tempSet = new Set();

		console.log( 'set:' + set.show() )
		console.log( 'set:' + this.show() )
		for ( var i = 0; i < set.dataStore.length; i ++ ) {
			if ( set.contains(this.dataStore[i]) ) {

				tempSet.add( set.dataStore[i] );
			}
		}

		return tempSet;

	},
	// 判断一个集合是否为另一个集合的子集
	subset : function(set) {
		if ( set.dataStore.length > this.dataStore.length ) {
			return false;
		}

		for ( var i = 0; i < set.dataStore.length; i ++ ) {
			if ( !this.contains(set.dataStore[i]) ) {
				return false;
			}
		}
		return true;
	},
	// 补集，属于第一个集合，不属于第二个集合的集合
	difference : function(set) {
		var tempSet = new Set();

		for ( var i = 0; i < this.dataStore.length; i ++ ) {
			if ( !set.contains(this.dataStore[i]) ) {
				tempSet.add( this.dataStore[i] );
			}
		}

		return tempSet;
	}

};