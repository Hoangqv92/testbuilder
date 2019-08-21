// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
	// for (var x = 624; x <= 626; x++) {
	// 	if(parseInt(cardNumber.slice(0,3) === x)) {
	// 		return chinaCard = true;
	// 	}
	// }
	// for (var y = 6282; y <= 6288; y++) {
	// 	if(parseInt(cardNumber.slice(0,4) === y)) {
	// 		return chinaCard = true;
	// 	}
	// }
	if ([16, 18, 19].includes(cardNumber.length) && ([4903, 4905, 4911, 4936, 6333, 6759].includes(parseInt(cardNumber.slice(0, 4))) || [564182, 633110].includes(parseInt(cardNumber.slice(0, 6))))) {
		return 'Switch';
	} else if (cardNumber.length == 14 && [38, 39].includes(parseInt(cardNumber.slice(0,2)))) {
		return 'Diner\'s Club';
	} else if (cardNumber.length == 15 && [34, 37].includes(parseInt(cardNumber.slice(0,2)))) {
		return `American Express`;
	} else if ([13, 16, 19].includes(cardNumber.length) && [4].includes(parseInt(cardNumber.slice(0,1)))) {
		return "Visa";
	} else if ([16].includes(cardNumber.length) && [51, 52, 53, 54, 55].includes(parseInt(cardNumber.slice(0,2)))) {
		return "MasterCard"; 
	} else if ([16, 19].includes(cardNumber.length) && ([65].includes(parseInt(cardNumber.slice(0,2))) || [644, 645, 646, 647, 648, 649].includes(parseInt(cardNumber.slice(0,3))) || [6011].includes(parseInt(cardNumber.slice(0,4))))) {
		return "Discover";
	} else if ([12, 13, 14, 15, 16, 17, 18, 19].includes(cardNumber.length) && [5018, 5020, 5038, 6304].includes(parseInt(cardNumber.slice(0, 4)))) {
		return "Maestro"; 
	} else if ([16, 17, 18, 19].includes(cardNumber.length) && ((parseInt(cardNumber.slice(0,6)) >= 622126 && parseInt(cardNumber.slice(0,6)) <= 622925) || (parseInt(cardNumber.slice(0,3)) >= 624 && parseInt(cardNumber.slice(0,3)) <= 626) || (parseInt(cardNumber.slice(0,4)) >= 6282 && parseInt(cardNumber.slice(0,4)) <= 6288))) {
		return 'China UnionPay';
	}  else return "Invalid";

  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};
//  || (parseInt(cardNumber.slice(0,4) >= 6282 && parseInt(cardNumber.slice(0,4) <= 6288)))))