console.log("Program Start")

var home;
var itemName;
var itemPrice
var inventory = [
{
	item : "milk",
	price: 4.25
},
{
	item : "bread",
	price : 2.75
},
{
	item : "eggs",
	price : 3.50
},
{
	item : "cereal",
	price : 4.25
},
{
	item : "rice",
	price : 8.00
},
{
	item : "bag of apples",
	price : 5.00
},
{
	item : "crackers",
	price : 3.60
},
{
	item : "carrots",
	price : 4.50
}

];
while (true) {
	home = prompt("Welcome to the Mach1 Inventory Control System.  
	To add an item, type 'add'.  
	To delete an item, type 'delete'.  
	To search for an item, type 'search.'
	To exit the program, type 'exit'.") 
	if (home === "add")
	{
		itemName = prompt("What is the name of the item you wish to add?")
		itemPrice = prompt("What is the price of the item?")
		inventory.push("{item : itemName, price : itemPrice},")
	}
}
console.log(inventory)
