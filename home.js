document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    const pinNumber =1234;
    // bank
    const bank =document.getElementById('bank').value;

    // account number

    const account =document.getElementById('bankNumber').value;

    // add money

    const money =parseInt(document.getElementById('amount').value);

    // pin Number

    const pin =parseInt(document.getElementById('pin').value);

    // money

    const aviblebalance =parseInt(document.getElementById('money').innerText);
    if(account.length !== 11){
        alert('please privide valid account number')
        return;
    }
    if(pinNumber !== pin){
        alert('please privide valid pin Number');
        return;
    }

    const totalmoney = money +aviblebalance;
    console.log(totalmoney);

    document.getElementById('money').innerText = totalmoney;

    
    
})

document.getElementById('withdraw-money').addEventListener('click',function(event){
    event.preventDefault();
    const pinnumber =1234;
    const pin =parseInt(document.getElementById('pinNumber').value);
    const agentNumber =(document.getElementById('agentNumber').value);

   const amount =parseInt(document.getElementById('amounts').value);
   
   const total =document.getElementById('money').innerText;
   if( pin !== pinnumber){
    alert('please privide valid pin Number');
    return;
   }
   if(agentNumber.length !== 11){
    alert('please privide valid agent number');
    return;
   }

   const totalmoney =total - amount;

   document.getElementById('money').innerText = totalmoney
   

})

document.getElementById('addmoney').addEventListener('click',function(){
    document.getElementById('cash-out').style.display ='none';
    document.getElementById('add-money').style.display ='block'
})
document.getElementById('cashout').addEventListener('click',function(){
    document.getElementById('add-money').style.display = 'none';
    document.getElementById('cash-out').style.display ='block';

})