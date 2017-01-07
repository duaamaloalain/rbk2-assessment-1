var Stack = function() {
	var _storage = Object.create(arrayMethod);
	this.array=[];
	this.value=null; 
	return _storage ; 
};

var arrayMethod = {}

arrayMethod.add = function(value) {
	this.array.push(value); 
}

arrayMethod.remove=function(value) {
	this.array.splice(this.array.indexOf(value),1)
}