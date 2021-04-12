$(document).ready(function () {
    // add the functions as event listeners
    // to the forms in the HTML
    $("#clickForm").on("submit", countClick);
    $("#ageForm").on("submit", checkAge);
    $("#taxForm").on("submit", calcSalesTax);
    $("#catForm").on("submit", recommendFood);
    $("#cardForm").on("submit", drawCard);
});

function countClick(event) {
    event.preventDefault();

    // Increment a variable that tracks the
    // number of button clicks

    // Print the current number of clicks to the
    // <p> with ID "clickCountOutput"

    // When the count gets to 10, reset it to 0


}


function checkAge(event) {
    event.preventDefault();

    // Get the user's birth year from the text
    // box with ID of "birthYear"

    // If they are currently under 18, print "Child"
    // to the <p> with ID of "birthYearOutput"

    // If they are 18 or over, print "Adult" instead

}

function calcSalesTax(event) {
    event.preventDefault();

    // Get the purchase amount from the text
    // box with ID of "purchaseAmount"

    // Get the state from the text box with ID "state"

    // Tax rates are: WI 5%, IL 8%, MN 7.5%, MI 5.5%

    // Calculate the sales tax amount and print to
    // the <p> with ID of "salesTaxOutput"

    // If the user enters a state not listed above,
    // print "Error" instead


}

function recommendFood(event) {
    event.preventDefault();

    // Get the cat's age from the text box with
    // ID of "catAge"

    // Cats under 2 get "kitten chow", between 2 and 10
    // get "adult chow", and over 10 get "senior chow"

    // Print the food recommendation to the <p> with
    // ID of "catAgeOutput"


}

function drawCard(event) {
    event.preventDefault();

    // Generate a random card face value (1 - 13)
    let faceValue = Math.floor(Math.random() * 13) + 1;

    // Generate a random suit (1 - 4)
    let suit = Math.floor(Math.random() * 4) + 1;

    // Declare a variable to hold the description
    // of the card, for example "King of Spades"
    // or "2 of Hearts"
    let description;

    // For face values 2 - 10, you can just print the number.
    // Face value 1 is "Ace", 11 is "Jack", 12 is "Queen",
    // and 13 is "King"

    // For the suits, 1 is "Clubs", 2 is "Spades",
    // 3 is "Hearts", 4 is "Diamonds"

    // Print the card's description to the <p> with
    // ID of "drawCardOutput"


}