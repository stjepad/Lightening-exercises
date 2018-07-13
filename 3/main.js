console.log("WHUT WHUT")

// 1. Create a function that logs the result of adding two numbers that were passed in as arguments.
// 2. Create another function that logs the result of subtracting two numbers that were passed in as arguments.
// 3. Invoke each function a couple times with different argument values.

function adding(a,b){
    console.log(a + b)
}
adding(1,2)

// 2. Create another function that logs the result of subtracting two numbers that were passed in as arguments.

function subtracting (a,b) {
    console.log(a - b)
}
subtracting(8,4)

// 3. Invoke each function a couple times with different argument values.

adding(2382374,23423)
adding(713,346)
adding(911,3)

subtracting(10101, 10100)
subtracting(645,316)
subtracting(17,13)

function calculate(a,b,operator){
    operator(a,b)
}
calculate(1,9, adding)
calculate(1,9, subtracting)
