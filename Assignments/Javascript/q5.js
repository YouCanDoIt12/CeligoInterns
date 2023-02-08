function SortArray(originalArray) {
    this.originalArray = originalArray;
  }
  SortArray.prototype.getSortedArray = function() {
    return this._sortArray();
  };
  SortArray.prototype._sortArray = function() {
    return this.originalArray.sort((a, b) => a - b);
  };
  
  function SortObjectArray(originalArray) {
    SortArray.call(this, originalArray);
  }
  SortObjectArray.prototype = Object.create(SortArray.prototype);
  
  SortObjectArray.prototype._sortArray = function() {
    return this.originalArray.sort((a, b) => a.value - b.value);
  };
  
  const numberArray = new SortArray([3, 2, 1]);
  console.log(numberArray.getSortedArray());
  
  const objectArray = new SortObjectArray([{value: 3}, {value: 1}, {value: 2}]);
  console.log(objectArray.getSortedArray());
  