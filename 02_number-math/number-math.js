// basics operations of math
2 * 2
10 / 5
1 + 1
5 - 3

// (* multiplication), (/ division) are the same priority, evaluated from left to right
50 * 10 / 50 // output 10
50 / 10 * 50 // output 250

// (+ addition), (- subtraction) are the same priority, evaluated from left to right
10 + 10 - 10 // output 10
10 - 10 + 10 // output 10

// () is the first priority
2 + 8 + 2 * 20 / 10 // output 14
2 + (8 + 2) * 20 / 10 // output 22

// percentage in js 50% of 80
80 * 0.5 // output 40
80 * (50 / 100) // output 40

// inaccuracies with Floats
0.1 + 0.2 // output 0.30000000000000004
10.95 + 10.99 // output 21.939999999999998
// it's wrong to fix this
let fix = (1095 + 1099) / 100 // output 21.94

// round numbers
Math.round(2.49) // output 2
Math.round(2.50) // output 3

// 10% of this
let dollar = (10.95 + 10.99) * 0.1 // output 2.194
let cents = ((1095 + 1099) * 0.1) / 100 // output 2.194

Math.round((10.95 + 10.99) * 0.1) // output 2
Math.round((1095 + 1099) * 0.1) / 100 // output 2.19
// when it comes to calculate dollar, cents should be round, not dollar

// decimal number will vanished
Math.floor(2.99) // output 2

// one dicimal will go to next number
Math.ceil(2.01) // output 3