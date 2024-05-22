const accountId = 144553
console.log(accountId)
// accountId=1552  not allowed coz const is defined only one 
var accountPassword="1232"
accountPassword="2121"
console.log(accountPassword)
let accountName="Ariz"
accountName="hitesh"
console.log(accountName)
console.table([accountId,accountPassword,accountName])
/* 
note- dont use VAR because in issue in blocked and functional scope
without giving let var const , we can define variable like....accountState=1...console.log(accountState)   this is possible
also if nothing is defined like Let accountDuration; then this will be undefined 
*/