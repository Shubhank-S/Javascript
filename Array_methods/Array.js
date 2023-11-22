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

// let number = [1,2,3,4,5,6,7,8,9]
// const spliceArray = number.splice(3,3,62,34)
// console.log('Original Array =',number)
// console.log('Return value in the form of array is',spliceArray)


// 6) Array.Filter()

const numbers = [1,2,3,4,5,6,7,8,9,10]

const Arrayy = numbers.filter((number)=>{
 return number>6
 
})

// console.log(Arrayy)
let variable = 'hello programmers';

let result = Number(variable);

// console.log(result);


// 7) Array.find()

const data =[
    {
        id:1,
        name: "Shubhank"
    },
    {
        id:2,
        name: "Rohi",
    },
    {
        id:3,
        name: "Prajwal"
    }
]
const findResult = data.find((student)=>{
    return(
        student.name === "Rohi"
        )
    })
    // console.log(findResult)
    
    let Ages = [21,33,45,22,37,50,12,68]
    
// 10) Array.findIndex()

    const findIndexResult = Ages.findIndex((age)=>{
    return age >25
    
})
console.log(findIndexResult)


// 11) Array.some()


 