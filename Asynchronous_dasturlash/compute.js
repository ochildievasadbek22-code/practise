/* callback function
       define        call 
        callback     function
*/

// define -synchronous function
// function division(a, b) {
//     return a % b;
// }

// // call -synchronous function
// const result = division(7, 4);
// console.log(result);

// define -asynchronous function
function division(a, b, callback) {
    if (b === 0) {
        callback("Not divided by zero", null);
} else {
    callback(null, a % b);
}
}
// call -asynchronous function
division(10, 3, function(error, data) {
    if (error) console.log("ERROR:", error);
    else {   
    console.log("RESULT:", data);
    console.log("...:");


    division(10, 4, function(error, data) {
        if (error) console.log("ERROR:", error);
        else {   
        console.log("RESULT:", data);
        console.log("...:");

        division(20, 7, function(error, data) {
            if (error) console.log("ERROR:", error);
            else {   
            console.log("RESULT:", data);
            console.log("...:");
        }
        });
        
    }
    });
    
}
});
