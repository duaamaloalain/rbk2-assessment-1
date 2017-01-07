var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

  return {
    _storage: [],
    retrieve: function(key) {
      var index = this.hashFunc(key, this.max) , node = this._storage[index], element ; 
      if (!node) {
        return null;
      }
      for (var i = 0; i < node.length; i++) {
        element = node[i];
          if (element[0] === key) {
          return element[0];
          }
        }
    },


  insert: function(key, value) {
      //your code is here
      var index = this.hashFn(key, this.max);
      var node= this._storage[index];

    };
  };
}
// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};