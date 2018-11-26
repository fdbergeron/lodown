'use strict';

// YOU KNOW WHAT TO DO //

/**
 * 
 * identity: Takes a value as its argument and immediately returns the same value.
 * 
 * @param {Anything} anything: The value to be returned.
 * 
 * @return {Anything}: The value passed in as an argument.
 * 
 * Usage:
 * 
 * const numbers = [1, 2, 3, 4, 5];
 * const returnNumbers = identity(numbers);
 * console.log(returnNumbers); // -> [1, 2, 3, 4, 5]
 */
 
 function identity(anything) {
    return anything;
     
 }
 
 module.exports.identity = identity;
 
 /**
  * typeOf: Evaluates the data type of the argument and returns the type as a 
  *         string.
  * 
  * @param {Anythng} anything: Any value.
  * 
  * @return: {String}: A string that describes the data type of the argument.
  * 
  * Usage:
  * 
  * const frank = 'Frank';
  * const numbers = [1, 2, 3, 4, 5];
  * const cadiz = {boy: 'Frank', girl: 'Gaby', cat: 'Milly'};
  * 
  * const returnFrankType = typeOf(frank);
  * console.log(returnFrankType); // -> "string"
  * 
  * const returnNumbersType = typeOf(numbers);
  * console.log(returnNumbersType); // -> "array"
  * 
  * const returnCadizType = typeOf(cadiz);
  * console.log(returnCadizType); // -> "object"
  */
  
  function typeOf(anything) {
      if (Array.isArray(anything)) {
          return 'array';
          
      } else if (anything === null) {
          return 'null';
          
      } else if (anything instanceof Date) {
          return 'date';
          
      } else {
          return typeof anything;
          
      }
      
  }
  
  module.exports.typeOf = typeOf;
  
  /**
   * first: Returns an array consisting of the first <number> element(s) in
   *        <array>.
   * 
   * @param {Array} array: An array.
   * @param {Number} number: A number.
   * 
   * @return {Array}: An array consisting of the first <number> elements of 
   *                  <array>. If <array> is not an array or if <number> is less
   *                  than one, returns an empty array.
   * @return {Anything}: If <number> is not a number or is not passed in, returns
   *                     the first element of <array>.
   * 
   * Usage:
   * 
   * const numbers = [1, 2, 3, 4, 5];
   * 
   * const firstThreeNumbers = first(numbers, 3);
   * console.log(firstThreeNumbers); // -> [1, 2, 3];
   * 
   * const firstNegativeOneNumbers = first(numbers, -1);
   * console.log(firstNegativeOneNumbers); // -> [];
   * 
   * const firstNanNumbers = first(numbers, 'Milly');
   * console.log(firstNanNumbers); // -> 1
   */
   
   function first(array, number) {
       if (typeOf(array) !== 'array' || number < 1) {
           return [];
           
       }
       if (typeOf(number) !== 'number' || number === undefined) {
           return array[0];
           
       }
       return array.slice(0, number);
       
   }

module.exports.first = first;
 
/**
  * last: Returns an array consisting of the last <number> element(s) in <array>.
  * 
  * @param {Array} array: An array.
  * @param {Number} number: A number.
  * 
  * @return {Array}: An array consisting of the last <number> element(s) in 
  *                  <array>. If <array> is not an array or if <number> is less
  *                  than one, returns an empty array.
  * @return {Anything}: If <number> is not a number or is not passed in, returns
  *                     the last element of <array>.
  * 
  * Usage:
  * 
  * const numbers = [1, 2, 3, 4, 5];
  * const lastThreeNumbers = last(numbers, 3);
  * console.log(lastThreeNumbers); // -> [3, 4, 5]
  * 
  * const lastNegativeOneNumbers = last(numbers, -1);
  * console.log(lastNegativeOneNumbers); // -> []
  * 
  * const lastNanNumbers = last(numbers, 'Milly');
  * console.log(lastNanNumbers); // -> 5
  */
  
  function last(array, number) {
      if (typeOf(array) !== 'array' || number < 1) {
          return [];
          
      }
      if (typeOf(number) !== 'number' || number === undefined) {
          return array[array.length - 1];
          
      }
      if (number > array.length) {
          return array;
          
      }
      return array.slice(array.length - number);
      
  }

module.exports.last = last;

 /** 
 * each: Loops over <collection> and calls <func> once for each element or value
 *       of <collection>, passing in three argments: the element, its index or
 *       key, and <collection>. This function does not return a value. If 
 *       <collection> is not an array or object, a string describing the data
 *       type of <collection> will be logged to the console.
 * 
 * @param {Array or Object} collection: The array or object whose values will 
 *                                      passed into <func> once each.
 * @param {Function} func: This will be called once for each value in <collection>.
 *                         The arguments passed in will be the element, its index
 *                         or key, and <collection>.
 * 
 * Usage:
 * 
 * const numbers = [1, 2, 3, 4, 5];
 * const eachNumberPlusOne = [];
 * each(numbers, function(element, index, array) {eachNumberPlusOne.push(element + 1);});
 * console.log(eachNumberPlusOne); // -> [2, 3, 4, 5, 6]
 * 
 * const cadiz = {boy: 'Frank', girl: 'Gaby', cat: 'Milly'};
 * const cadizAsACoolArray = [];
 * each(cadiz, (value, key, object) => {cadizAsACoolArray.push(value + ' is cool!');});
 * console.log(cadizAsACoolArray) // -> ['Frank is cool!', 'Gaby is cool!', 'Milly is cool!']
 */
 
 function each(collection, func) {
     if (typeOf(collection) === 'array') {
         for (let i = 0; i < collection.length; i++) {
             func(collection[i], i, collection);
             
         }
         
     } else if (typeOf(collection) === 'object') {
         for (let key in collection) {
             func(collection[key], key, collection);
             
         }
         
     } else {
         console.log(typeOf(collection));
         
     }
     
 }

module.exports.each = each;

/**
 * indexOf: Determines if <value> is an element or value of <collection>. If so,
 *          returns the index or key of the first instance of <value>.
 * 
 * @param {Array or Object} collection: An array or object that will be searched
 *                                      for <value>.
 * @param {Simple Datatype} value: The element or value for which <collection> 
 *                                 will be searched.
 * 
 * @return {Number or String}: If <collection> is an array, will be either the
 *                             index number of <value>'s first instance in
 *                             <collection> or -1 if <collection> does not contain
 *                             <value>. If <collection> is an object, will be
 *                             either the key to which <value> is paired or -1 if
 *                             <collection> does not contain <value>.
 * 
 * Usage: 
 * 
 * const cadiz = {boy: 'Frank', girl: 'Gaby', cat: 'Milly'};
 * console.log(indexOf(cadiz, 'Milly')); // -> cat
 * 
 * const numbers = [1, 2, 3, 3, 4,];
 * console.log(indexOf(numbers, 3)); // -> 2
 * console.log(indexOf(numbers, 5)); // -> -1
 */
 
 function indexOf(collection, value) {
     let result = -1;
     each(collection, function(element, index) {
         if (element === value && result === -1) {
             result = index;
             
         }
         
     });
     return result;
     
 }

module.exports.indexOf = indexOf;

/**
 * filter: Calls <func> on each element of <collection> and returns an array 
 *         consisting of each element for which the <func> call returned true.
 * 
 * @param {Array or Object} collection: A collection of elements that will be
 *                                      passed into <func> as arguments.
 * @param {Function} func: A function that will return true or false.
 * 
 * @return {Array}: A collection of elements from <collection> that, when passed as
 *                  arguments into <func>, return true.
 * 
 * Usage:
 * 
 * const cadiz = {boy: 'Frank', girl: 'Gaby', cat: 'Milly'};
 * let cadizCat = filter(cadiz, (value, key) => {return key === 'cat';});
 * console.log(cadizCat); // -> ['Milly']
 * 
 * const numbers = [1, 2, 3, 4, 5];
 * const evenNumbers = filter(numbers, function(element) {return element % 2 ? false : true});
 * console.log(evenNumbers); // -> [2, 4]
 */
 
function filter(collection, func) {
    let resultArray = [];
    each(collection, function(e, i, c) {
        if (func(e, i, c)) {
            resultArray.push(e);
            
        }
        
    });
    return resultArray;
    
}

module.exports.filter = filter;

/**
 * reject: Calls <func> on each element of <collection> and returns an array
 *         consisting of each element for which the <func> call returned false.
 * 
 * @param {Array or Object} collection: A collection of elements that will be
 *                                      passed into <func> as arguments.
 * @param {Function} func: A function that will return true or false.
 * 
 * @return {Array}: A collection of elements from <collection> that, when passed as
 *                  arguments into <func>, return false.
 * 
 * Usage:
 * 
 * const numbers = [1, 2, 3, 4, 5];
 * const notEvenNumbers = reject(numbers, element => {return element % 2 === 0});
 * console.log(notEvenNumbers); // -> [1, 3, 5]
 * 
 * const cadiz = {boy: 'Frank', girl: 'Gaby', cat: 'Milly'};
 * const notCadizCat = reject(cadiz, (element, key) => {return key === 'cat'});
 * console.log(notCadizCat); // -> ['Frank', 'Gaby']
 */
 
 function reject(collection, func) {
    let resultArray = [];
    filter(collection, function(e, i, c) {
        if (!func(e, i, collection)) {
            resultArray.push(e);
        }
    });
    
    return resultArray;
    
}

module.exports.reject = reject;

/**
 * partition: Sorts the elements of <collection> by Boolean value returned by
 *            calling <func> on each element. Returns an array consisting of two
 *            subarrays: the elements that returned true and the elements that
 *            returned false.
 * 
 * @param {Array or Object} collection: A collection of elements that will be
 *                                      passed into <func> as arguments.
 * @param {Function} func: A function that will return true or false.
 * 
 * Usage:
 * 
 * const numbers = [1, 2, 3, 4, 5];
 * const evensAndOdds = partition(numbers, element => {return element % 2 === 0});
 * console.log(evensAndOdds); // -> [[2, 4], [1, 3, 5]]
 * 
 * const cadiz = {boy: 'Frank', girl: 'Gaby', cat: 'Milly'};
 * const cadizCatsAndPeople = partition(cadiz, (element, key) => {return key === 'cat'});
 * console.log(cadizCatsAndPeople); // -> [['Milly'], ['Frank', 'Gaby']]
 */
 
 function partition(collection, func) {
     return [filter(collection, func), reject(collection, func)];
     
 }

module.exports.partition = partition;

/**
 * unique: Returns a new array with any duplicated elements removed.
 * 
 * @param {Array} array: An array.
 * 
 * @return {Array}: An array consisting of non-duplicated elements from <array>.
 * 
 * Usage:
 * 
 * const numbers = [1, 1, 2, 2, 2, 3, 4, 5];
 * const dupNumbersRemoved = unique(numbers);
 * console.log(dupNumbersRemoved); // -> [1, 2, 3, 4, 5]
 * 
 * const letters = ['a', 'a', 'b', 'c', 'c', 'd', 'e', 'e', 'e'];
 * const dupLettersRemoved = unique(letters);
 * console.log(dupLettersRemoved); // -> ['a', 'b', 'c', 'd', 'e']
 */
 
 function unique(array) {
     let resultArray = [];
     each(array, function(e, i, c) {
         if (indexOf(resultArray, e) === -1) {
             resultArray.push(e);
             
         }
         
     });
     return resultArray;
     
 }
 
 module.exports.unique = unique;
 
 /**
  * map: Calls <func> once each for every element of <collection>. Returns an 
  *      array consisting of the values returned from each <func> call.
  * 
  * @param {Array or Object} collection: An array or object whose elements will
  *                                      passed as arguments to <func>.
  * @param {Function} func: A function.
  * 
  * @return {Array}: An array consisting of the return value from each <func> call.
  * 
  * Usage:
  * 
  * const cadiz = {boy: 'Frank', girl: 'Gaby', cat: 'Milly'};
  * const coolCadiz = map(cadiz, element => {return element += ' is cool!'});
  * console.log(coolCadiz); // -> ['Frank is cool!', 'Gaby is cool!', 'Milly is cool!']
  * 
  * const numbers = [1, 2, 3, 4, 5];
  * const squaredNumbers = map(numbers, element => {return element ** 2});
  * console.log(squaredNumbers); // -> [1, 4, 9, 16, 25]
  * 
  */
  
  function map(collection, func) {
    let resultArray = [];
    if (typeOf(collection) === 'array' || typeOf(collection) === 'object') {
        each(collection, function(element, indexOrKey, arrayOrObject) {
            resultArray.push(func(element, indexOrKey, arrayOrObject));
        });
    } else {
        return typeOf(collection);
    }
    return resultArray;
    
}

module.exports.map = map;

/**
 * pluck: Searches an array of objects and returns an array consisting of each
 *        value paired with the <prop> key.
 * 
 * @param {Array} arrayOfObjects: An array of objects.
 * @param {String} prop: A string. 
 * 
 * @return {Array}: An array consisting of any object values paired with the <prop>
 *                  key.
 * 
 * Usage:
 * 
 * const cadiz = [{name: 'Frank', age: 45},{name: 'Gaby', age: 40},{name: 'Milly', age: 10}];
 * const cadizAges = pluck(cadiz, 'age');
 * console.log(cadizAges); // -> [45,40,10 ]
 */
 
 function pluck(arrayOfObjects, prop) {
     return map(arrayOfObjects, function(element, indexOfObject, collection) {
         return element[prop];
         
     });
     
 }

module.exports.pluck = pluck;

/**
 * contains: Checks <array> for the presence of <value> and returns true or false
 *           accordingly.
 * 
 * @param {Array} array: An array that will be searched for <value>.
 * @param {Simple Datatype} value: A value that is not an object or array collection.
 * 
 * @return {Boolean}: True or false, depending on the presence of <value> in <array>.
 * 
 * Usage:
 * 
 * const numbersContainsTwo = contains(numbers, 2);
 * console.log(numbersContainsTwo); // -> true
 * 
 * const numbersContainsSix = contains(numbers, 6);
 * console.log(numbersContainsSix); // -> false
 */
 
 function contains(array, value) {
     return filter(array, function(element) {return element === value}).length ? true : false;
     
 }

module.exports.contains = contains;

/**
 * every: Calls <func> for every element of <collection>. If the return value
 *        of calling <func> for every element is true, returns true. Otherwise,
 *        returns false. If <func> is not provided, returns true if each element
 *        of <collection> is truthy. Otherwise, returns false.
 * 
 * @param: {Array or Object} collection: An array or object collection whose
 *                                       elements will either be passed into <func>
 *                                       (if <func> is provided) or evaluated for
 *                                       truthiness.
 * @param: {Function} func: A function that returns a Boolean.
 * 
 * Usage:
 * 
 * const everyNumberIsGreaterThanZero = every(numbers, element => {return element > 0});
 * console.log(everyNumberIsGreaterThanZero); // -> true
 * 
 * const everyNumberIsLessThanFive = every(numbers, element => {return element < 5});
 * console.log(everyNumberIsLessThanFive); // -> false
 */
 
 function every(collection, func) {
    // create testArray for <func> call values
    let testArray = [];
    // if <func> is a function, push <func> calls into testArray
    if (typeOf(func) === 'function') {
        each(collection, function(e, i, c) {
            testArray.push(func(e, i, c));
        });
    } else {
    // if <func> is not a function, evaluate truthiness of elements and push Boolean into testArray
        each(collection, function(e, i, c) {
            if (e) {
                testArray.push(true);
            } else {
                testArray.push(false);
            }
        });
    }
    // if _.contains(testArray, false) is truthy, return false, otherwise return true
    return !contains(testArray, false);
}

module.exports.every = every;

/**
 * some: Calls <func> for every element of <collection>. If the return value
 *        of calling <func> for every element is true at least once, returns true.
 *        Otherwise, returns false. If <func> is not provided, returns true if at
 *        least one element of <collection> is truthy. Otherwise, returns false.
 * 
 * @param: {Array or Object} collection: An array or object collection whose
 *                                       elements will either be passed into <func>
 *                                       (if <func> is provided) or evaluated for
 *                                       truthiness.
 * @param: {Function} func: A function that returns a Boolean.
 * 
 * Usage:
 * 
 * const atLeastOneNumberIs3 = some(numbers, element => {return element === 3});
 * console.log(atLeastOneNumberIs3); // -> true
 * 
 * const atLeastOneNumberIs6 = some(numbers, element => {return element === 6});
 * console.log(atLeastOneNumberIs6); // -> false
 */
 
 function some(collection, func) {
    // create testArray
    let testArray = [];
    // if <func> is a function, push each <func> call into testArray
    if (typeOf(func) === 'function') {
        each(collection, function(e, i, c) {
           testArray.push(func(e, i, c)); 
        });
        
    } else {
    // if <func> is not a function, evaluate truthiness of each <collection> element/value
    //      and push Bool into testArray
        each(collection, function(e, i, c) {
            if (e) {
                testArray.push(true);
            } else {
                testArray.push(false);
            }
        });
    
    }
    // if _.contains(testArray, true) is true, return true
    // default is to return false
    return contains(testArray, true);
}

module.exports.some = some;

/**
 * reduce: Calls <func> once for every element in <array>, passing in the value
 *         of the previous <func> call, the current element, and the collection.
 *         On the first <func> call, <seed> will be used as the first argument in
 *         place of the previous result. If <seed> is not provided, the first
 *         <func> call will take the first <array> element as the first argument
 *         and the second <array> element as the second argument.
 * 
 * @param {Array} array: An array whose elements will be iterated over.
 * @param {Function} func: A function. func(previousResult, currentElement, collection)
 * @param {Anything} seed: The value to use in place of the previous result in the
 *                         the first <func> call.
 * 
 * @return {Anything}: The value returned by the final <func> call.
 * 
 * Usage:
 * 
 * const numbers = [1, 2, 3, 4, 5];
 * const numbersTotal = reduce(numbers, function(pr, e) {return pr + e});
 * console.log(numbersTotal); // -> 15
 * 
 * const numbersTotalPlus10 = reduce(numbers, function  (pr, e) {return pr + e}, 10);
 * console.log(numbersTotalPlus10); // -> 25
 */
 
 function reduce(array, func, seed) {
    // if no seed is given, use first element of array as seed - start loop on second element of array
    let previousResult;
    if (seed === undefined) {
        previousResult = array[0];
        for (let i = 1; i < array.length; i++) {
            previousResult = func(previousResult, array[i], i);
        }
        
    } else {
        previousResult = seed;
        each(array, function(e, i, c) {
            previousResult = func(previousResult, e, i);
        });
    }
    return previousResult;
}

module.exports.reduce = reduce;

/**
 * extend: Takes an unspecified number of object collections as arguments. Updates
 *         the first argument with the key/value pairs of all subsequent arguments.
 * 
 * @param {Objects}: An unspecified number of object collections.
 * 
 * @return {Object}: The first argument updated with the key/value pairs of the
 *                   subsequent object arguments.
 * 
 * Usage:
 * 
 * const cadiz = {};
 * const frank = {name: 'Frank', age: 45};
 * const gaby = {name: 'Gaby', age: 40};
 * const milly = {name: 'Milly', age: 10};
 * extend(cadiz, frank, gaby, milly);
 * console.log(cadiz); // -> {name: 'Milly', age: 10}
 */
 
 function extend(...obj) {
    //loop through array of objects
    for(var i = 1; i < obj.length; i++){
        //for in loop to loop through each object's properties
        for(var key in obj[i]) {
            //update first object's properties using other objects' properties
            obj[0][key] = obj[i][key];
            
        }
        
    }
    return obj[0];
    
}

module.exports.extend = extend;
