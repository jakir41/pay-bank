document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault()
    const mobileNumber = 12345678910;
    const pinNumber =1234;
    const mobilenumbervalue =document.getElementById('mobileNumber').value;
    const mobileNconvert =parseInt(mobilenumbervalue);
    const pinNumberValue =document.getElementById('pinNumber').value;
    const pinNumberConvert =parseInt(pinNumberValue)

    if(mobileNconvert.length === mobileNumber.length && pinNumber.length === pinNumberConvert.length){
        window.location.href="./home.html"
    }
    else{
        alert('Ivalid credent')
        
    }
})