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