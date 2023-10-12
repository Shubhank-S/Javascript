// 1) Array.reverse() (mutating method)

/* const letters = ["a","b","c","d",'e']
const numbers = [1,2,3,4,5] */
/*
const result = letters.reverse()
console.log(result)
console.log(letters)
console.log()

 */

// 2) Array.concat() (not a mutating method)

/*
const concated = letters.concat(numbers)
console.log(concated) 
console.log([...letters,...numbers])  */

// 3) Array.join()

/* 
const joined = letters.join("")
console.log( joined)
 */

//4) Array.slice()

/* 
const array = [1,2,3,4,5,6,7,8,9,10]
const sliceArray = array.slice(2,6)
console.log(sliceArray)
*/

// 5) Array.splice()

let number = [1,2,3,4,5,6,7,8,9]
const spliceArray = number.splice(3,3,62,34)
console.log('Original Array =',number)
console.log('Return value in the form of array is',spliceArray)




