
/* A-TASK: 
Savol: Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashgan sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.
*/

/* Masalaning yechimi: */
function task(harf, suz) {
  let countValue = 0;
  for (let a = 0; a < suz.length; a++) {
    if (suz[a] == harf) {
      countValue++
    }
  }
  return countValue;
}
result = task("s", "successfull")
console.log(result)

