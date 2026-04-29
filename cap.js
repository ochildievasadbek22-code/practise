/* asynchronous functions: callback vs Async vs Promise

       DEFINE              CALL 
       callback            callback
       asynch/await         them/catch
       promise              them/catch
*/



// define -asynchronous function
function division(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject("Not divided by zero", null);
    } else {
        setInterval(function(){
            resolve (a % b);
        }, 2000);
    }
    })
    }
   
// call -asynchronous function
division(10, 3,).then(data => {
     console.log("Result:", data)
     console.log(".......")

     division(20, 7,).then(data => {
        console.log("Result:", data)
        console.log(".......")
   }).catch(err => {
       console.log("Error division:", err)
   }) 


     division(10, 4,).then(data => {
        console.log("Result:", data)
        console.log(".......")
   }).catch(err => {
       console.log("Error division:", err)
   }) 

}).catch(err => {
    console.log("Error division:", err)
}) 