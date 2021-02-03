exports.accountTypeChecker = function accountTypeChecker(accountBalanceHistory) {
    let accountBalances = {}

    accountBalanceHistory.forEach(entry => {      
        accountBalances[entry.monthNumber] = entry.account.balance.amount
    });

    let month;
    let same_difference;
    let numberOfEntries = Object.keys(accountBalances).length
    
    for(month = 0; month < numberOfEntries - 2; month++) {
    let difference = accountBalances[month+1] - accountBalances[month]
    let second_difference = accountBalances[month+2] - accountBalances[month+1]
        if(difference == second_difference){
            same_difference = true
        } else {
            same_difference = false
            break
        }
    }
     return same_difference ? "B" : "A"
  };
