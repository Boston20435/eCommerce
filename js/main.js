function merch(name, price, jewels, image) {
	this.name  = name
	this.price  = price
	this.jewels = jewels
	this.image = image
}
// Assigns all below into the merch array
var chain  = new merch("Chain", "$13,000", "None", "img/chain.jpg")
var earring = new merch("Earrings", "$20,500", "Diamond", "img/earring.jpg")
var grill = new merch("Large Diamond Grill", "$15,200", "Diamond", "img/grill.jpg")
var pendant2 = new merch("Black Jesus", "$14,000", "Black Diamond", "img/pendant2.jpg")
var pendant = new merch("Jesus Pendant", "$5,500", "Diamond", "img/pendant.jpg")
var watch = new merch("Iced Out Watch", "$18,000", "Diamond", "img/watch.jpg")

var merchArray = new Array

// Puts all above into an array
merchArray.push (chain, earring, grill, pendant2, pendant, watch)

/* Running a for loop that will create a div element, within that div element will be another div, then a h1 for the name of the item, an h4 for the price & jewels, a button, and an image*/
for (var i = 0; i < merchArray.length; i++) {
	var newItem = document.createElement("div")
	var newDiv = document.createElement("div")
	var nameH1 = document.createElement("h1")
	var priceH4 = document.createElement("h4")
	var jewelsH4 = document.createElement("h4")
	var btn = document.createElement("button")
	var image = document.createElement("img")

	// This is going to add all the text to everything, prefix t just means it's the text to the matching variable above
	var tName = document.createTextNode(merchArray[i].name)
	var tPrice = document.createTextNode("Price: " + merchArray[i].price)
	var tJewels = document.createTextNode("Jewels: " + merchArray[i].jewels)
	var tButton = document.createTextNode("Buy")

	// update source attribute for image
	image.src = merchArray[i].image

	// updates classes to reference bootstrap rules
	image.className = "img-responsive"
	btn.className = "btn btn-primary btn-lg"
	newItem.className = "col-sm-4"
	newDiv.className = "merchName" + [i] + " thumbnail"

// attaches the text earlier to the actual elements
	nameH1.appendChild(tName)
	priceH4.appendChild(tPrice)
	jewelsH4.appendChild(tJewels)
	btn.appendChild(tButton)

	// Adds all items together
	newDiv.appendChild(nameH1)
	newDiv.appendChild(image)
	newDiv.appendChild(jewelsH4)
	newDiv.appendChild(priceH4)
	newDiv.appendChild(btn)

	// adds all those to the new item div which will be the complete listing
	newItem.appendChild(newDiv)

	document.getElementById("products").appendChild(newItem)
}
