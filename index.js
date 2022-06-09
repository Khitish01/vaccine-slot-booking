function submitfun(event){
    event.preventDefault();
    var fullName=document.getElementById("full__name").value;
    var email=document.getElementById("email").value
    var age=document.getElementById("age").value
    var phoneNumber=document.getElementById("phone").value
    var adharNumber=document.getElementById("adhar").value
    var address=document.getElementById("address").value
    var date=document.getElementById("date").value

    var user = {
        full__name: fullName,
        email: email,
        age: age,
        phone: phoneNumber,
        adhar: adharNumber,
        address: address,
        date: date,
    };
    
    var json = JSON.stringify(user);
    localStorage.setItem(fullName, json);
    console.log('User added ');

    

    
}
