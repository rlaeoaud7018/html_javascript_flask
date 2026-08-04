let accountNo =  1;

// 계좌 개설
const openingNewAccount = () => {
    console.log('openingNewAccount() CALLED!!');

    let customerNo = createCustomerNo();
    let accountNo = createAccountNumber();
    let customerName = prompt('INPUT CUSTOMER NAME!! ');
    let customerPhone = prompt('INPUT CUSTOMER PHONE!! ');

    let customerObj = new Customer(customerNo, customerName, customerPhone, accountNo);
    customerDB.set(customerNo, customerObj);

    let accountObj = new Account(accountNo, 0, 0, getDateTimeFormat());
    accountDB.set(accountNo, accountObj);
    accountNo++;

    console.log('customerObj: ', customerObj)
    console.log('accountDB: ', accountDB)


}

// 입금
const doDeposit = () => {
    console.log('doDeposit() CALLED!!');

    // 고객번호, 계좌번호, 예금 금액
    let customerNo = prompt('INPUT CUSTOMER NO ');
    let accountNo = prompt('INPUT ACCOUNT NUMBER ');
    let depositMoney = prompt('INPUT DEPOSIT MONEY ');

    let accountObj = new Account(accountNo, depositMoney, 0, getDateTimeFormat()) ;
    accountDB.set(accountNo, accountObj);
    accountNo++;

    console.log('accountDB: ', accountDB)

}

// 출금
const doWithDraw = () => {
    console.log('doWithDraw() CALLED!!');

    // 고객번호, 계좌번호, 출금 금액
    let customerNo = prompt('INPUT CUSTOMER NO ');
    let accountNo = prompt('INPUT ACCOUNT NUMBER ');
    let withdrawMoney = prompt('INPUT WITHDRAW MONEY ');

    let accountObj = new Account(accountNo, 0, withdrawMoney, getDateTimeFormat()) ;
    accountDB.set(accountNo, accountObj);
    accountNo++;

    console.log('accountDB: ', accountDB)

}

// 입/출금 내역
const printDepositWithdrawHistory = () => {
    console.log('printDepositWithdrawHistory() CALLED!!');

    for (const [key, value] of accountDB)
        console.log(`key: ${key} - value: ${value.accountNumber} ${value.depositMoney} ${value.withdrawMoney} ${value.dateTime}`);


}