
// Two ways to write an object literals or contructer(singleTon)
// Key-value pair in object

// Object Literals

const User = {
   name: "Shubhank",
   "fullName": "Shubhank Sharma",
   age: 22,
   location: "Ujjain",
   logIn : false,
   allUsers : ["r","s","t"]
}
// Object.freeze(User)
User.location = "Dewas"
User.Greetings = function(){
    console.log("Hello")
}
// console.log(User.name)
// console.log(User['name'])
// console.log(User["fullName"])

