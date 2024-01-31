// Initialize count
let count = 0;

// Function to update the count and display it
function updateCount() {
    count++;
    document.getElementById("countDisplay").textContent = `Count: ${count}`;
}

// Get the button element and attach a click event listener
const countButton = document.getElementById("countButton");
countButton.addEventListener("click", updateCount);