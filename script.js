let link = "https://reqres.in";
let token ;


    
function Loading(X){
    if(X == true){
            document.getElementById("Load").style.visibility="visible";
            document.getElementById("Load").style.zIndex= 2000;
            document.getElementById("Scrn").style.opacity= "20%";
            
    }if( X == false){
                document.getElementById("Load").style.visibility="hidden";
                document.getElementById("Load").style.zIndex= 500;
                document.getElementById("Scrn").style.opacity= "100%";
    }
    }

function CreateNewUser(){
    token = localStorage.getItem("token")

let Name = document.getElementById("UNIN")
let Job = document.getElementById("JIN")
if(Name.value == ""){Job.style.borderBottom = "4px solid #ff0000"; Job.focus() ;alert("Missing Name or Job")}
else if(Job.value== ""){Job.style.borderBottom = "4px solid #ff0000"; Job.focus();alert("Missing Name or Job")}
else{

let Config = {
headers:{"Authorization": `Bearer ${token}`}
}



axios.post(link + "/api/users" , {
    name: Name.value,
    job: Job.value
},
Config)

.then((Res)=>{alert("User Created Succefully") ; 
document.getElementById("Box").innerHTML = `
<p style="width: 100%; text-align: center; height: 15px; margin: 0;">User Details</p>
<div>
<label>ID : </label>
<div>${Res.data.id}</div>
</div>

<div>
<label>Name : </label>
<div>${Res.data.name}</div>
</div>

<div>
<label>Job : </label>
<div>${Res.data.job}</div>
</div>

<div>
<label>Created At : </label>
<div>${new Date(Res.data.createdAt)}</div>
</div>


`

console.log(Res.data)

})
.catch(()=>{alert("There is An Error")})

}
}



function login(){
    let Email = document.getElementById("EIN").value
    let Pass = document.getElementById("PIN").value

    Loading(true)
axios.post(link + "/api/login" , {
    email: Email,
    password: Pass
})

.then((Res)=>{
Loading(false)
alert("Login Succesfully")
    alert("Your Token : " + Res.data.token)
    localStorage.setItem("token", Res.data.token)
document.getElementById("Box").innerHTML = `
<p style="width: 100%; text-align: center; height: 15px; margin: 0;">Create New User</p>
<div>
<label>Name</label>
<input type="text" placeholder="User Name" id="UNIN" >
</div>

<div>
<label>Job</label>
<input type="text" placeholder="Job" id="JIN">
</div>

<span>
<button onclick="CreateNewUser()">Create</button>
</span>
</div>

`
})


.catch((err)=>{alert(err.response.data.error); Loading(false)})


}




