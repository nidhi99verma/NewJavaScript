const accountId = 144553
let accountEmail = "onish@google.com"
var accountPassword = "12345"
accountCity = "Gorakhpur"

// accountId = 2 // not allowed 
accountEmail = "onish@gmail.com"
accountPassword = "67890"
accountCity = "Bengluru"
let accountState; //undefined

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountEmail,accountPassword,accountCity]);
console.log(accountState);
