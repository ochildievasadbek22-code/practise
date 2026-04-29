/* asynchronous functions: callback vs Async vs Promise

       DEFINE              CALL 
       callback            callback
       async/await         them/catch  & async/await 
       promise             them/catch  & async/await 
*/



// define -asynchronous function
async function division(a, b) {
   if (b === 0) {
            throw new Error("Not divided by zero", null);
    } else {
        return (a % b);
    }
    
}
   
// call -asynchronous function
async function run() {
    let result = await division(10, 3);
    console.log("Result one:", result)

    result = await division(10, 4);
    console.log("Result: two:", result)

    result = await division(20, 7);
    console.log("Result: three:", result)
}
run()