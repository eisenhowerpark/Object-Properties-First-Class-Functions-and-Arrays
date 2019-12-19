// ... //
// object properties and methods //
// ... //

var obj = {
    greet: 'Hello'
}

console.log(obj.greet); // We can call the greeting using the property name's object-literal syntax.
console.log(obj['greet']); // We can also use syntax brackets to name the property within a string,
// which makes it more dynamic.

var prop = 'greet';
console.log(obj[prop]);
// This is a clean invocation, which points back to the original property using a string.

// The above greeting is invoked in 3 different ways above.

// ... //
// Funtions and Arrays //
// ... //

var arr = [];

arr.push(function() {
    console.log('Hello World 1');
}); // Just about anything can go into an array, & just about as many of them as you want.
arr.push(function() {
    console.log('Hello World 2');
});
arr.push(function() {
    console.log('Hello World 3');
});

arr.forEach(function(item) {
    item();
}); // This is one method for iterating through an array of functions.
// Each function in the array is an array item, & is invoked as such, using
// function(item) and item();