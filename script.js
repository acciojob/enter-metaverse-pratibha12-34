//your JS code here. If required.
let p= document.getElementById("status")
let btn= document.getElementById("enterBtn")
btn.addEventListener("click",(e)=>{
	e.preventDefault();
	let h1= document.createElement('h1');
	p.innerText=null;
	h1.innerText="Entered Metaverse";
	p.append(h1);
	
})