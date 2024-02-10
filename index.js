let ratingSelected = null;

// create a function that retrieves the rating a user selected 
function selectRating(rating) {
    ratingSelected = rating;
    console.log(`Rating selected: ${ratingSelected}`)
}

//a function that on the user clicking the submit button displays the rating 
function submitRating() {
    if (ratingSelected !== null) {
        //pushes the rating to the h2 text
        document.querySelector(".rating-selected").textContent = ratingSelected;

        //hides the rating state
        document.querySelector(".rating-state").style.display = "none";

        //display the thankyou-state
        document.querySelector(".thankyou-state").style.display = "block";
    } else { 
        alert("Please select a rating before submitting");
    }
}