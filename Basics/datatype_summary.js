// # Primitive Datatype
// 7 catogeries: 
// string, number, boolean, null,undefined, Symbol, Bigint(big Values)
// javascript is dynamically or static language? 
// Reference datatype
// array, objects, Function
/*-----------------------------------
//stack(primitive), Heap(Non primitive)
In JavaScript, heap and stack refer to memory management concepts used to store and manage data during program execution.

1. Stack
The stack is a region of memory used for managing primitive data types and function calls.
It operates in a Last In, First Out (LIFO) manner.
Data stored in the stack is:
Primitive types: string, number, boolean, null, undefined, symbol, bigint.
Function call context: Local variables and execution context.
The stack is fast because it has a fixed size and is automatically managed.
Example:
let x = 10; // Stored in the stack
let y = x;  // y gets a copy of x (value is copied)
y = 20;
console.log(x); // Output: 10 (x remains unchanged)
2. Heap
The heap is a region of memory used for managing non-primitive data types.
It is used for dynamic memory allocation and can grow or shrink as needed.
Data stored in the heap is:
Non-primitive types: objects, arrays, functions.
The heap is slower than the stack because it has a variable size and requires garbage collection.
Example:    
let obj = { name: "Alice" }; // Stored in the heap  
let arr = [1, 2, 3];       // Stored in the heap
let func = function() { console.log("Hello!"); }; // Stored in the heap
obj.age = 25; // Modifying the object in the heap
console.log(obj); // Output: { name: "Alice", age: 25 }
3. Memory Management
JavaScript automatically manages memory using a garbage collector.
The garbage collector identifies and frees up memory that is no longer in use, particularly for objects in the heap.
This helps prevent memory leaks and optimizes memory usage.
-----------------------------------*/


// # Variables
/*
1. JavaScript Data Types
JavaScript has two main categories of data types:

Primitive Data Types:
String: Represents text. Example: "Hello, World!"
Number: Represents numeric values. Example: 42, 3.14
Boolean: Represents true or false.
Null: Represents an intentional absence of value. Example: null
Undefined: A variable that has been declared but not assigned a value.
Symbol: Represents a unique identifier.
BigInt: Used for very large integers. Example: 123n

Reference Data Types:
Array: A collection of values. Example: [1, 2, 3]
Object: A collection of key-value pairs. Example: { name: "John", age: 30 }
Function: A block of reusable code. Example:
function greet() {
  console.log("Hello!");
}
2. Variables
Variables are used to store data. You can declare variables using:

var (old, avoid using it)
let (block-scoped)
const (block-scoped, value cannot be reassigned)
Example:

let name = "Alice";
const age = 25;
3. Operators
Arithmetic: +, -, *, /, %
Comparison: ==, ===, !=, !==, <, >, <=, >=
Logical: &&, ||, !
Example:
let x = 10;
let y = 5;
console.log(x + y); // Output: 15
*/