let changeDue = 0;
document.getElementById('changeDue').innerHTML = changeDue;
let Twenties = 0;
document.getElementById('twenties-output').innerHTML = Twenties;
let Tens = 0;
document.getElementById('tens-output').innerHTML = Tens;
let Fives = 0;
document.getElementById('fives-output').innerHTML = Fives;
let Dollars = 0;
document.getElementById('dollars-output').innerHTML = Dollars;
let Quarters = 0;
document.getElementById('quarters-output').innerHTML = Quarters;
let Dimes = 0;
document.getElementById('dimes-output').innerHTML = Dimes;
let Nickels = 0;
document.getElementById('nickels-output').innerHTML = Nickels;
let Pennies = 0;
document.getElementById('pennies-output').innerHTML = Pennies;

function calculateChange(){
	let amountReceived = document.getElementById('amount-received').value * 100;
	let amountDue = document.getElementById('amount-due').value * 100;
	let changeDue = ((amountReceived - amountDue)/100).toFixed(2);
		document.getElementById('changeDue').innerHTML = changeDue;
	let subTotal = (amountReceived - amountDue);
	let Twenties = Math.floor((subTotal)/2000);
		document.getElementById('twenties-output').innerHTML = Twenties;
	let Tens = Math.floor((subTotal%2000)/1000);
		document.getElementById('tens-output').innerHTML = Tens; 
	let Fives = Math.floor((subTotal%1000)/500);
		document.getElementById('fives-output').innerHTML = Fives;
	let Dollars = Math.floor((subTotal%500)/100);
		document.getElementById('dollars-output').innerHTML = Dollars;
	let Quarters = Math.floor((subTotal%100)/25);
		document.getElementById('quarters-output').innerHTML = Quarters;
	let Dimes = Math.floor((subTotal%25)/10);
		document.getElementById('dimes-output').innerHTML = Dimes;
	let Nickels = Math.floor((subTotal-twenties*2000-tens*1000-fives*500-ones*100-quarters*25-dimes*10)/5);
		document.getElementById('nickels-output').innerHTML = Nickels;
	let Pennies = Math.ceil((subTotal%5)/1);
		document.getElementById('pennies-output').innerHTML = Pennies;
};

function handleClickEvent(){
  return calculateChange();
}