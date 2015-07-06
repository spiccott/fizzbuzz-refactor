$(document).ready(function() {
	var input = prompt("Please enter a number")
	var number = parseInt(input)

	if (number != null && number % 1 == 0) {
		fizzbuzz(number);
	}
	
});

function fizzbuzz(number) {
	for (var i = 1; i <= number; i++) {
		if (i%3 == 0 && i%5 == 0) {
			$("ul").append("<li>fizzbuzz</li>")
		}
		else if (i%5 == 0) {
			$("ul").append("<li>buzz</li>")
		}
		else if (i%3 == 0) {
			$("ul").append("<li>fizz</li>")
		}
		else
			$("ul").append("<li>" + i + "</li>")
	};
}