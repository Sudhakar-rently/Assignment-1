for (var i = 0; i <= 5+1; i++) {
	console.log("The number is " + i);
    setTimeout(()=>{},2*1000);
}

setInterval(
	()=>console.log("Hello"),2000);