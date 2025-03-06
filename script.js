//your JS code here. If required.
document.getElementById("btn").addEventListener("click",(e)=>{
	e.preventDefault();//this will prevent reloading of your page
	const age = document.getElementById("age").value;
	new Promise((resolve, reject)=>{
		if(age>18){
			setTimeout(()=>{
				resolve("Welcome, . You can vote.")
			},4000)
		}
		else{
			setTimeout(()=>{
				reject("Oh sorry . You aren't old enough.")
			},4000)
		}
	}).then((res)=>alert(res))
		.catch((err)=>alert(err))
})