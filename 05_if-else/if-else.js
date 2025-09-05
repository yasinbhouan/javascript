// if, else
if (true) {
  console.log('condition is true'); // this code will run
} else {
  console.log('else won\'t work');
}

if (false) {
  console.log('condition is false');
} else {
  console.log('else will run'); // this code will run
}

// if, else if, else
if (true) {
  console.log('condition is true'); // this code will run
} else if (false) {
  console.log('else if won\'t run');
} else{
  console.log('else also doesn\'t work');
}

if (false) {
  console.log('condition is false');
} else if (true) {
  console.log('else if will work'); // this code will run
} else {
  console.log('else won\'t work');
}

if (false) {
  console.log('condition is false');
} else if (false) {
  console.log('it\'s won\'t work');
}else{
  console.log('This code will work'); // this code will run
}

// ternary operator
true ? 'truthy' : 'falsy'; // returns 'truthy'
false ? 'truthy' : 'falsy'; // returns 'falsy'

// ternary oparator can be store in a variable
let trueValue = true ? 'truthy' : 'falsy'; // 'truthy'
let falseValue = false ? 'truthy' : 'falsy'; // 'falsy'
console.log(trueValue);
console.log(falseValue);

//gaurd oparator, Logical AND (&&)
let isLoggedIn = true;
isLoggedIn && console.log('user is logged in'); // 'user is logged in' if isLoggedIn is true

// Logical OR (||)
let name = undefined; // '' null, undefined, 0, false
let defaultName = name || 'guest user'; // 'guest user' if name is falsy
console.log(defaultName);

// default oparator, nullish coalescing (??)
let username = undefined; // null or undefined.
let defaultUsername = username ?? 'guest username'; // 'guest username' if username is falsy
console.log(defaultUsername);