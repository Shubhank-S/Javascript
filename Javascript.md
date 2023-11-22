## == vs ===

== is Loose Equality
=== is Strict Equality

## String methods

## Array methods

1.  Slice
2.  Splice
3.  at
4.  concat
5.  push
6.  pop
7.  shift
8.  unshift
9.  find
10. findIndex
11. some
12. every

9) find

Higher order array method
It return thefirst element we are looking for

10. findIndex

## Async Await

## Event Loop

Javascript is a synchronous single threaded language . it has one Call stack and it can do one thing at a time.

Call stack is present inside the javascript engine and all the code of javscript is executed inside the call stack.

Whenever any javascript program is run a Global Execution context is created and the Global Execution context is pushed inside the CallStack.

Now in Global Execution context the whole javascript will start running line by line. During the time of execution if we have any function and when function is invoked or called an execution context is created and this Execution context is pushed inside the call stack.

The main job of our Call Stack is to quickely execute what ever comes inside it. It does not wait for anything.

Javascript is run inside the browser and this browser contains the Javascript engine and inside the javascript engine we have our call stack

But for the execution of an async task we need some extra features which can actually help us to execute the async code

And to access all the features we need WEB APIs in Javascript

Some WEB APIs :

SetTimeOut()
DOM APIs
fetch()
LocalStorage
Console
Location

This are all the features which are present inside the browsers

## Higher order Functions

The function which take another function as an arguement or returns a function is know as higher order functions

function x(){
console.log("Shubhank)
}

function y(){
x()
}

y is H igher order funtion
x is Call back funtion

## Promises
