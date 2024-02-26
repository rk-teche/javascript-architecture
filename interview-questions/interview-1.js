

["alice","Bob","cathy","david","Eve"].sort((a,b) => {
    if(a > b) // our logic
    {
        return 0
    }
    else 
        return -1
})

let x = 23 && 44 || 32 
let y = 20 || 25 && 30
// What is the value of x , y


// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1


// non duplicating element; O(n)

function nonDuplicateElements(numsArray = []) // O(n^2)
{
    let numObj = {}, uniqueArray = [];
    for(let i = 0; i < numsArray.length; i++) // O(n)
    {
        if(!numObj[numsArray[i]])
        {
            // unique element
            numObj[numsArray[i]] = numsArray[i]
            uniqueArray.push(numsArray[i])
        }
        else
        {
            // duplicate element
            // O(n)
            const indx = uniqueArray.findIndex(val => val === numsArray[i])
            indx > -1 && uniqueArray.splice(indx, 1)
        }
        
    }

    return uniqueArray;
}

// [2,2,1]
// sorting -> n*log(n)
// take first element -> compare till we get another element
// if comparison is true not do not include, otherwise include

// O(n)
function nonDuplicateElements(numsArray = []) // O(n^2)
{
    numsArray.sort() // n*log(n) [1,2,2], [1,1,2,2,4]
    const uniqueArray = [];

    let i = 0
    while(i < numsArray.length) // n
    {
        if(!numsArray[i+1] || numsArray[i] !== numsArray[i+1])
        {
            uniqueArray.push(numsArray[i])
            i++
        }
        else
        {
            i = i + 2;
        }
    }

    return uniqueArray;
}


(function(){
    setTimeout(()=> console.log(1),2000);
    console.log(2);
    setTimeout(()=> console.log(3),0);
    console.log(4);
   })();
   // 2, 4, 3, 1

let a = 1000/0;
if(isNaN(a)){
	return `not a number`;
}
else{
	return `Number`;
}




let promise1 = Promise.reject(10);
let promise2 = Promise.resolve(100);
let promise3 = Promise.reject("Error");


/* Promise.prototype.newAll = function(promiseArray)
{
  console.log("promiseArray", promiseArray)
  console.log("this", this)
}
 */
/* Promise.newAll() */

function newAll(promiseArray = [])
{
	return new Promise((resolve, reject) => {
  	promiseArray.forEach((promise, idx) => {
  			promise.then(res => {
        		if(idx == (promiseArray.length - 1))
                {
                    resolve(res)
                }
        }).catch(err => {
        		reject(err)
        })
 		})
  })
	
}

newAll([promise1, promise2, promise3]).then().catch()

//.then(res => {}).catch(err => console.error(err))


const arr1 =[
  {id:1,name:"John"},
  {id:2,name: "Bob"}
];

const arr2 = [
    {id:2,age:24},
    {id:1,age:23},
];

/* Output:

[
  {id: 1, name: "John", age: 23},
  {id: 2, name: "Bob", age: 24}
] */

function mergeArray(array1, array2)
{
	return array1.map(item => {
  		const obj = array2.find(item2 => item2.id === item.id);
      return {...obj, ...item}
  })
}

/*Input : “how are uoy”
	Output : “Woh era you” */
  
/*   function reverseWords(paragraph = "")
  {
    const wordsArray = paragraph.split(" ");
    
    wordsArray
  } */

function reverse(str= "")
{
	const stringArray = str.split("")
	let reverseString = "";  
  for(let i = (stringArray.length - 1); i > -1; i--)
  {
  		reverseString += stringArray[i]
  }
  
  return reverseString; // uoy are
}

// n^2
function reverseString(str= "")
{
	const stringArray = str.split(" ")
	let reverseString = "";
  
  stringArray.forEach(val => {
		reverseString = `${reverseString} ${reverse(val)}` 
  })
  
  return reverseString
}

/*Input : “how are uoy”
	Output : “Woh era you” */
function reverseString(str= "")
{
	let i = 0, j = 0;
  let reverseString = ""
  while(i < str.length)
  {
  	if(str[i] === " ") /// blank space check
    {
    // string ends here
    	let newLocalStr = "";
     	// one word ends
      while(j < i)
      {
	      newLocalStr += str[i-j-1];
      	str[j];
        j++;      
      }
      j++
		reverseString = `${reverseString} ${newLocalStr}`;
    }
    i++;
  }
  
  return reverseString;

}


/* Input: strs = ["eat","tea","tan","ate","nat","bat"] */
/* Output: [ 
        ["bat"],
        ["nat","tan"],
        ["ate","eat","tea"]
        ] */


function printAangrams(stringArray = [])
{
	/* stringArray. */
  //
  
  for(let idx of stringArray)
  {
  
  }
 /*  stringArray.reduce((acc, val, idx) => {
  
    
    const localArray = val.split("")
      
      localArray.for(item => {
        if(acc.has(item))
        {
          acc.set(item, acc.get(item) + 1)		
        }
        else
        {
          acc.set(item, 1)		
        }
      })
      
  }, new Map()) */
  
}

function anagrams(stringMap, strinArray)
{
	for(let item of strinArray)
  {
        	if(acc.has(item) )
          {
          	acc.set(item, acc.get(item) - 1)		
          }
          else
          {
          	//break
          }
        }
        
  return       
}




