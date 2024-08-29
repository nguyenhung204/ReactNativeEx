const numbers = [1, 2, 3, 4, 5];

Array.prototype.RewiteReduce = (array, callback, initialValue) => {
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }

  return accumulator;
} 

Array.prototype.myMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
    }
    return result;
  };


  Array.prototype.myFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  };

  Array.prototype.myFind = function(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return this[i];
      }
    }
    return undefined;
  };

const sum = numbers.RewiteReduce(numbers, (acc, cur) => acc + cur, 0);
console.log(sum);

const double = numbers.myMap((num) => num * 2);
console.log(double);

const even = numbers.myFilter((num) => num % 2 === 0);
console.log(even);

const find = numbers.myFind((num) => num === 3);
console.log(find);

