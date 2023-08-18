// step-1 add event handler with withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2: get the withdraw ammount from withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmmountString = withdrawField.value;
    const newWithdrawAmmount = parseFloat(newWithdrawAmmountString);

    // step-3: get previous withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString)

    // step-4: calculate total withdraw ammount and set total withdraw ammount

    const currntWithdrawTotal = previousWithdrawTotal+ newWithdrawAmmount;
    withdrawTotalElement.innerText = currntWithdrawTotal;

    // step-5: get the previous balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString)

    // step-6 calculate new balance total and set new balance
    const newbalanceTotal = previousBalanceTotal - newWithdrawAmmount;
    balanceTotalElement.innerText = newbalanceTotal;


    // step-7: clear input field
    withdrawField.value = '';
})
