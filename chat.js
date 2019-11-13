function mylogin(){
	if (rg1.value=="" || psw1.value=="" || cpsw1.value =="" ) {
		alert("you have to register");
	}
else{
	alert("login successful");
	document.getElementById('register1').style.display='none';
	document.getElementById('phone1').style.display='block';
	document.getElementById('send').style.display='inline';
	document.getElementById('fh').innerHTML=rg1.value;

}

}

function myview(){
	document.getElementById('cpsw1').type='text';
}
function myview2(){
	document.getElementById('view').style.display='inline';
}

function mypix(){
	document.getElementById('pix').style.display='inline';
}

// SECOND register

function mylogin2(){
	if (rg2.value=="" || psw2.value=="" || cpsw2.value =="" ) {
		alert("you have to register");
	}
else{
	alert("login successful");
	document.getElementById('register2').style.display='none';
	document.getElementById('phone2').style.display='block';
	document.getElementById('send2').style.display='inline';
	document.getElementById('fh2').innerHTML=rg2.value;

}

}

function myview2(){
	document.getElementById('cpsw2').type='text';
}
function myview3(){
	document.getElementById('view2').style.display='inline';
}

function mypix2(){
	document.getElementById('pix2').style.display='inline';
}


// JKSAJKSAJKSDJKDSJKDSJ

function myfunction() {
	var ans=fp.value
	document.getElementById('phone1').innerHTML+="<div style='background:green;color:white;width:70px;border-radius:10px;padding:20px; margin-left:230px'>" 
	+ ans + "</div><br>";
   document.getElementById('phone2').innerHTML+="<div style='background:grey;color:white;width:70px;border-radius:10px;padding:20px; margin-left:10px'>" 
	+ ans + "</div><br>"
	
}

function mysecondfunction(){
	var chattwo =sp.value;
	document.getElementById('phone1').innerHTML+= "<div style='background:grey; color:white;width:70px;border-radius:10px;padding:20px;margin-left:10px'>" 
	+ chattwo + "</div><br>"
	// "<br>"+ fp.value + "<br>";"<br>";
	document.getElementById('phone2').innerHTML+="<div style='background:green; color:white;width:70px;border-radius:10px;padding:20px;margin-left:230px'>" 
	+ chattwo + "</div><br>";

	// console.log(chattwo);


}
