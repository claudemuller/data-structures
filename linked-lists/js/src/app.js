import { SinglyLinkedList } from "./singly-linked-list";
import { DoublyLinkedList } from "./doubly-linked-list";
import { inspect } from "util";

const depth = 5;

// ==================================================================================
// Doubly Linked List

console.log("Appending...");

let list = new SinglyLinkedList();

console.log("Appending...");
list.append("one");
list.append("two");
list.append("three");
console.log(inspect(list, { depth }), "\n");

console.log("Traversing...");
list.traverse(n => console.log(n.value));

console.log("\nInsertingAt...");
let two = list.traverse(n => n.value === "two");
list.insertAt(two, "twoPointFive");
console.log(inspect(list, { depth }), "\n");

console.log("Removing...");
list.remove(two);
console.log(inspect(list, { depth }), "\n");

// ==================================================================================
// Doubly Linked List

list = new DoublyLinkedList();

console.log("Appending...");
list.append("one");
list.append("two");
list.append("three");
console.log(inspect(list, { depth }), "\n");

console.log("Traversing...");
list.traverse(n => console.log(n.value));

console.log("\nInsertingAt...");
two = list.traverse(n => n.value === "two");
list.insertAt(two, "twoPointFive");
console.log(inspect(list, { depth }), "\n");

console.log("Removing...");
list.remove(two);
console.log(inspect(list, { depth }), "\n");
