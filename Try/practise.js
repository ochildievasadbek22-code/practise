// function division(a, b, callback) {
//   if (b === 0) {
//     callback("Not divided by zero", null)
//   }
//   else {
//     callback(null, a % b)
//   }
// }
// division(10, 4, (err, data) => {
//   if (err) console.log(err)

//   else {
//     console.log(data)
//   }
// })



/* callback funtion:
   define    call
   callback  function
*/

// const list = [
//   "be a good student",        // 0-20
//   "choose right boss",        // 21-30
//   "start your own business",  // 31-40
//   "do what you are good at",  // 41-50
//   "invest in young generation", // 51-60
//   "now do a rest and enjoy your life" // 61+
// ];

// function giveAdvice(age, callback) {
//   if (typeof age !== "number") callback("Insert only number", null)
//   else if (age >= 61) callback(null, list[5])
//   else if (age >= 51) callback(null, list[4])
//   else if (age >= 41) callback(null, list[3])
//   else if (age >= 31) callback(null, list[2])
//   else if (age >= 21) callback(null, list[1])
//   else callback(null, list[0])
// }
// giveAdvice('20', (err, data) => {
//   if (err) {
//     console.log("Error", err)
//   }
//   else {
//     console.log("data:", data)
//   }
// })



const list = [
  "be a good student",        // 0-20
  "choose right boss",        // 21-30
  "start your own business",  // 31-40
  "do what you are good at",  // 41-50
  "invest in young generation", // 51-60
  "now do a rest and enjoy your life" // 61+
];


async function suggest(age) {
  if (typeof age != "number") throw new Error("Insert only number")
  else if (age >= 61) return (null, list[5])
  else if (age >= 51) return (null, list[4])
  else if (age >= 41) return (null, list[3])
  else if (age >= 31) return (null, list[2])
  else if (age >= 21) return (null, list[1])
  else return list[0]
}
suggest('40').then(data => {
  console.log("Result:", data)
}).catch(err => {
  console.log("Error", err)
})