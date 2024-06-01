let link = "https://reqres.in";


function login(){

    let Email = document.getElementById("EIN").value
    let Pass = document.getElementById("PIN").value

axios.post(link + "/api/login" , {
    email: Email,
    password: Pass
})

.then((Res)=>{
if(Res.status > 200 && Res.status < 300 ){alert("Your Token : " + Res.data.token)}
else{alert(Res.data.error)}
console.log(Res)
})



}

