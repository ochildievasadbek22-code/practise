




/* E-TASK: 

Savol: Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
MASALAN: getReverse("hello") return qilsin "olleh"
*/

// Masalaning yechimi: 

function revers(a) {
  const split = a.split("")
  const reverse = split.reverse()
  const join = reverse.join("")
  return join
}
const result = revers("hello")
console.log(result)


















//========================================================================================






/* D-TASK:

Savol: Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.
*/

// Masalaning yechimi: 

// function the(n) {
//   const max = Math.max(...n)
//   const index = n.indexOf(max)
//   return index
// }

// const result = the([5, 21, 12, 21, 8])
// console.log(result)








//========================================================================================









/* C-TASK:
Savol: Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;
*/

// Masalaning yechimi: 

// function checkContent(a, b) {
//   const sort1 = a.split("")
//   const sort2 = b.split("")
//   const q = sort1.sort()
//   const p = sort2.sort()
//   const x = p.join('')
//   const y = q.join('')
//   return x === y;
// }
// const result = checkContent('mitgroup', 'gmtiprou')
// console.log(result)









//========================================================================================



/* B-TASK:
Savol:Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
*/

// Masalaning yechimi: 
// function countDigits(str) {
//   con = 0;
//   for (let h of str) {
//     if (h >= "0" && h <= "9")
//       con++
//   }
//   return con
// }
// const result = countDigits("ad2a54y79wet0sfgb9")
// console.log(result)

//========================================================================================


/* A-TASK:
Savol: Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashgan sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.
*/

/* Masalaning yechimi: */
// function task(harf, suz) {
//   let countValue = 0;
//   for (let a = 0; a < suz.length; a++) {
//     if (suz[a] == harf) {
//       countValue++
//     }
//   }
//   return countValue;
// }
// result = task("s", "successfull")
// console.log(result)

