// Get the pizza size price and add it to the running Total
// then pass that running total to the next function so 
// the next function will add a particular total to the running total and so on...
//
// Keep doing this until you get all items added to the running total.
//
// Just remember that the syntax will be text1 = text1 + something + "<br>";
// So you take the orginal value and concetenate to something new and end it with
// an HTML line break so our code will write the next thing one line below instead
// of overwriting the previous print out.

function totalOrder() {
	text1 = ""; // These initialize as empty strings but get passed from  
	text2 = ""; // function to function, growing line by line into a full receipt
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeTotal2 = "";
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6
		sizeTotal2 = "$6.00";
		text2 = text2 + sizeTotal2 + "<br>";
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10
		sizeTotal2 = "$10.00";
		text2 = text2 + sizeTotal2 + "<br>";
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14
		sizeTotal2 = "$14.00";
		text2 = text2 + sizeTotal2 + "<br>";
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16
		sizeTotal2 = "$16.00";
		text2 = text2 + sizeTotal2 + "<br>";
	}
	runningTotal = sizeTotal;
	getMeat(runningTotal,text1,text2); // All three of these variables will be passed on to each function
};	

// With both the meat and veggie functions each item in the array will be
// 1 dollar but the first is going to be free so we can count the total
// of items in their array and subtract 1 to get the total item cost
//
// Now we can add the item cost to our running total to get the new
// running total and then pass this new running total to the next function
// Just keep up this process until we've added all items to the running total

function getMeat(runningTotal,text1,text2) {
	var runningTotal = runningTotal;
	var meatTotal = 0;
	var meatTotal2 = "";
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	for (var j = 0; j < selectedMeat.length; j++) {
			text1 = text1+selectedMeat[j]+"<br>";
			if (meatCount <= 1) {
				text2 = text2 + "$0.00" + "<br>";
				meatCount = meatCount - 1;
			} else if (meatCount == 2) {
				text2 = text2 + "$1.00" + "<br>";
				meatCount = meatCount - 1;
			} else {
				text2 = text2 + "$1.00" + "<br>";
				meatCount = meatCount - 1;
			}
	}
	getVeggie(runningTotal,text1,text2);
};

function getVeggie(runningTotal,text1,text2) {
	var veggieTotal = 0;
	var veggieTotal2 = "";
	var selectedVeggie = [];
	var veggieArray = document.getElementsByClassName("veggies");
	for (var j = 0; j < veggieArray.length; j++) {
		if (veggieArray[j].checked) {
			selectedVeggie.push(veggieArray[j].value);
		}
	}
	var veggieCount = selectedVeggie.length;
	if (veggieCount >= 2) {
		veggieTotal = (veggieCount - 1);
	} else {
		veggieTotal = 0;
	}
	runningTotal = (runningTotal + veggieTotal);
	for (var j = 0; j < selectedVeggie.length; j++) {
			text1 = text1+selectedVeggie[j]+"<br>";
			if (veggieCount <= 1) {
				text2 = text2 + "$0.00" + "<br>";
				veggieCount = veggieCount - 1;
			} else if (veggieCount == 2) {
				text2 = text2 + "$1.00" + "<br>";
				veggieCount = veggieCount - 1;
			} else {
				text2 = text2 + "$1.00" + "<br>";
				veggieCount = veggieCount - 1;
			}
	}
	getCheese(runningTotal,text1,text2);
};

function getCheese(runningTotal,text1,text2) {
	var cheeseTotal = 0;
	var cheeseTotal2 = "";
	var selectedCheese = [];
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var j = 0; j < cheeseArray.length; j++) {
		if (cheeseArray[j].checked) {
			selectedCheese = cheeseArray[j].value;
		}
		if (selectedCheese === "Extra Cheese") {
			cheeseTotal = 3
			cheeseTotal2 = "$3.00";
		}
		else {
			cheeseTotal2 = "$0.00";
		}
	}
	text2 = text2 + cheeseTotal2 + "<br>";
	text1 = text1 + selectedCheese + "<br>";
	runningTotal = (runningTotal + cheeseTotal);
	getSauce(runningTotal,text1,text2);
};

function getSauce(runningTotal,text1,text2) {
	var sauceArray = document.getElementsByClassName("sauce");
	for (var j = 0; j < sauceArray.length; j++) {
		if (sauceArray[j].checked) {
			selectedSauce = sauceArray[j].value;
			text1 = text1 + selectedSauce +"<br>";
		}
	}
	text2 = text2 + "$0.00"	+ "<br>";
	getCrust(runningTotal,text1,text2)
};

function getCrust(runningTotal,text1,text2) {
	var crustTotal = 0;
	var crustTotal2 = "";
	var selectedCrust;
	var crustArray = document.getElementsByClassName("crust");
	for (var j = 0; j < crustArray.length; j++) {
		if (crustArray[j].checked) {
			selectedCrust = crustArray[j].value;
			text1 = text1 + selectedCrust + "<br>";
		}
		if (selectedCrust === "Cheese Stuffed Crust") {
			crustTotal = 3
			crustTotal2 = "$3.00";
		}
		else {
			crustTotal2 = "$0.00";
		}
	}
	runningTotal = (runningTotal + crustTotal);
	text2 = text2 + crustTotal2 + "<br>";
	document.getElementById("invoice").style.opacity=1;
	document.getElementById("showText1").innerHTML=text1;
	document.getElementById("showText2").innerHTML=text2;
	document.getElementById("totalPrice2").innerHTML = "</h3>$"+runningTotal+".00"+"</h3>";
};

// This code clears the form selections to their defaults and then sets the 
// corresponding div's CSS opacity to 0, effectively hiding it from view.
function clearMenu() {
	document.getElementById("menuForm").reset();
	document.getElementById("invoice").style.opacity=0;
	document.location.reload();
};

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

})(jQuery); // End of use strict