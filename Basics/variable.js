const accountId = 2
let accountEmail = "vagisha@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;
/*
Prefer not to use var because of issue in block scope and functional scope
*/
// accountId = 3 // not allowed
//accountId = 3
accountEmail = "hc@hc.com"
accountPassword="213434"
accountCity = "Bengaluru"
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])