/**
 * ? Set(): 
 *   1. Collection of unique item
 *   2. Order doesn't matter --> 
 *          Often, we don't even want to retrieve a piece of data --> That's why we don't have index, key or anything specific to look up the value
 *   3. None of the element are duplicated
 *   4. Sets are neither array nor key:value pairs like object, they are something of its own
 * 
 *  ! Note -> Javascript `Object` is not iterable --> use `for in loop`
 */

const primaryColors = new Set();
primaryColors.add('red')
primaryColors.add('green')
primaryColors.add('blue')

primaryColors.has('yellow') // false

primaryColors.entries() // return iterable entries

Object.freeze(primaryColors) // in javascript till now (April 2022) --> One can't freeze the sets

const _array = ['data', 'd', 34]
const mySet = new Set(_array) //Note - Set only takes arguments which are iterable

for(let val of mySet){
    console.log(val);//data, d, 34
}

const backToArray = [...mySet] //just spread the Set inside the array
const backToArray1 = Array.from(mySet) //just spread the Set inside the array

/**
 * ? Set() vs WeakSet()
 */

const wSet = new WeakSet()
wSet.add(2)//TypeError
wSet.add({value: 'RK'}) //WeakSet only accept key:value pair or Array

for(let ws of wSet){
    console.log(ws);//Weak set not iterable
}


wSet.add()
/**
 * Custom Set Method
 * Methods :
 *  1. has
 *  2. values
 *  3. Add
 *  4. remove
 *  5. Size
 *  6. union -> return the union of two sets, take set as arguments
 *  7. intersection -> return the intersection of two sets as new set, take set as argument
 *  8. difference -> return the difference of two sets as new set
 *  9. subset
 */


 Set.prototype.union = function(_set){
    if(typeof _set !== "object") return false;

    _set.forEach(e =>  this.add(e))
    return this
}

let set1 = new Set([10, 100, 1000]);
let set2 = new Set([100, 200, 300]);

set1.union(set2) //Set(5) {10, 100, 1000, 200, 300}


Set.prototype.intersection = function(_set){
    if(typeof _set !== "object") return false;

    _set.forEach(e =>  this.add(e))
    return this
}

/**
 * ? Map()
 */

//Problem before Map()
const x = {value: 'uniqueId'}
const y = {value: 'another uniqueId'}

const a = {};
a[x] = 10
a[y] = 100
console.log(a); // a object only has last value because we are using `Object` as a key, so it replaces all the previous Object.

//Now Let's solve this problem using Map()

const mMap = new Map()
mMap.set()
mMap.set(x, 10).set(y, 100).set(x, 1000) // if key is same, which x in that case, so it will only remember last key:value pair only
console.log(mMap); //problem solved, Map can even store key:value pair as `Key`

for(const m of mMap){
    console.log(m); //you will an array of Key:value pair, [0] -> Key, [1] -> Value
}

for(const [key, value] of mMap){
    console.log(key);
    console.log(value);
}

const mapToArray = [...mMap];//return an 2-D Array with key value

/**
 * ? map() vs WeakMap()
 * 
 */