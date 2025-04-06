// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.


// Length
function getLength(str) {
  console.log("Original String:", str);
  console.log("Length:", str.length);
}
// getLength("Hello World");

// indexOf
function findIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.indexOf(target));
}
// findIndexOf("Hello World", "World");    //6
// findIndexOf("Praveen Bisht", "bisht");  //-1



// lastIndexOf
function findLastIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.lastIndexOf(target));
}
// findLastIndexOf("Hello World World", "World");  //12
// findLastIndexOf("Hello World World", "world");  //-1


// slice
function getSlice(str, start, end) {
  console.log("Original String:", str);
  console.log("After slice:", str.slice(start, end));
}
// getSlice("Hello World", 0, 7);  //Hello w
// getSlice("Hello World", 8, 2);  //nothing will happen
// getSlice("Hello World", 8, -2); //
// getSlice("Hello World", -8, -2);  



// substring
function getSubstring(str, start, end) {
  console.log("Original String:", str);
  console.log("After substring:", str.substring(start, end));
}
// getSubstring("Hello World", -10, 5); //Hello
// getSubstring("Hello World", 1, 5);  //ello 
// getSubstring("Hello World", 7, 5);


// replace
function replaceString(str, target, replacement) {
  console.log("Original String:", str);
  console.log("After replace:", str.replace(target, replacement));
}
// replaceString("Hello World", "World", "JavaScript");
// replaceString("Hello World", "bisht", "JavaScript"); //nothing will happen ans will be same


// split
function splitString(str, separator) {
  console.log("Original String:", str);
  console.log("After split:", str.split(separator));
}
// splitString("Hello World", " ");

// trim
function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim());
}
// trimString("     Hello World     ");

// toUpperCase
function toUpper(str) {
  console.log("Original String:", str);
  console.log("After toUpperCase:", str.toUpperCase());
}
// toUpper("Hello World");

// toLowerCase
function toLower(str) {
  console.log("Original String:", str);
  console.log("After toLowerCase:", str.toLowerCase());
}
// toLower("Hello World");