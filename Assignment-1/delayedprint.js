function myfun(timedelay)
{
	console.log("Hello "+timedelay);
}
setTimeout(myfun,5000,"5");
setTimeout(myfun,4999,"4");

setTimeout(fun, 3*1000,"Super","duper");

function fun(arg1)
{
	console.log(arg1+" Message");
}