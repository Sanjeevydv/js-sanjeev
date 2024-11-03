console.log("sanjeev")
const accountId = 14435
let accountEmail = "utsavraj@gmail.com"
var accountPassword = "12344"
accountCity = "jaipur"

accountEmail = "sanjeev@gmail.com"
accountPassword = "12"
//accountId = 2

/* prefer not use var
   because of issue in block scope and funtional scope
*/
let accountState;

console.log(accountId,accountEmail)

console.table([accountId,accountEmail,accountPassword,accountState])