let loginbtn=document.querySelector(".signbutton");

loginbtn.addEventListener("click",()=>
{
	window.open("/login.html");
})

let emailBtn=document.getElementById("emailBtn");


emailBtn.addEventListener("click",()=>{
	
	let email=document.getElementById("email").value;
	console.log(email)

	if(email!="gohelnikunj451@gmail.com") {
		window.open("404.html");
	}
	else{
		window.open("movielist.html");
	}
})