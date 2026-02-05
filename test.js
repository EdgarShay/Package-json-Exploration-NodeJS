import { add } from "./index.js";

console.log("Running Tests...");

// Normal Cases
console.log("Test 1:", add(2, 3) === 5 ? "Pass" : "Fail");
console.log("Test 2:", add(10, 5) === 15 ? "Pass" : "Fail");
console.log("Test 3:", add(0, 4) === 4 ? "Pass" : "Fail");

// Edge Cases
console.log("Test 4:", add(-2, 2) === 0 ? "Pass" : "Fail");
console.log("Test 5:", add(999999, 1) === 1000000 ? "Pass" : "Fail");
console.log("Test 6:", add(0, 0) === 0 ? "Pass" : "Fail");