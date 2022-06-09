showData();
function saveData()
{
let full__name,email,age,phone,adhar,address,date;
full__name=document.getElementById("full__name").value;
email=document.getElementById("email").value;
age=document.getElementById("age").value;
phone=document.getElementById("phone").value;
adhar=document.getElementById("adhar").value;
address=document.getElementById("address").value;
date=document.getElementById("date").value;



let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(user_records.some((v)=>{return v.adhar==adhar}))
{
  alert("duplicate data");
}
else
{
  user_records.push({
    "full__name":full__name,
    "email":email,
    "age":age,
    "phone":phone,
    "adhar":adhar,
    "address":address,
    "date":date,
})
localStorage.setItem("user",JSON.stringify(user_records));
}
showData();
}

function showData()
{
  document.getElementById("showUsers").innerHTML="";
  let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("users")):[]
  if(user_records)
  {
    for(let i=0;i<user_records.length;i++)
    {
      let addDiv=document.createElement('div');
  addDiv.className="row";
  addDiv.innerHTML=' <td class="col-sm-4">'+user_records[i].fullName+'</td><td class="col-sm-4">'+user_records[i].email+'</td><td class="col-sm-4">'+user_records[i].age+'</td><td class="col-sm-4">'+user_records[i],phoneNumber+'</td><td class="col-sm-4">'+user_records[i].adharNumber+'</td><td class="col-sm-4">'+user_records[i].address+'</td><td class="col-sm-4">'+user_records[i].date+'</td> ';
  document.getElementById("showUsers").appendChild(addDiv);

    }
  }
  }
