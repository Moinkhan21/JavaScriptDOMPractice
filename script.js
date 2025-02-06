// Selection of an element: `querySelector` allows you to select the first element that matches a given selector.
var a = document.querySelector("h3"); // Select the first <h3> element on the page
console.log(a); // Logs the selected <h3> element to the console

// Changing HTML content: `innerHTML` allows you to modify the content inside an HTML element.
var ab = document.querySelector("h1"); // Select the first <h1> element
ab.innerHTML = "Hello, World!"; // Change the content of the <h1> to "Hello, World!"

// Changing CSS styles: You can modify the inline styles of an element using the `style` property.
var abc = document.querySelector("h2"); // Select the first <h2> element
abc.style.color = "red"; // Change the text color of <h2> to red
abc.style.backgroundColor = "black"; // Change the background color of <h2> to black

// Event Listener: `addEventListener` allows you to listen for user interactions or events.
var abcd = document.querySelector("h1"); // Select the first <h1> element
abcd.addEventListener("click", function(){
    console.log("Hello, Developer!"); // When <h1> is clicked, log the message to the console
})

var abcde = document.querySelector("h2"); // Select the first <h2> element
abcde.addEventListener("click", function(){
    // When <h2> is clicked, change its content and styles
    abcde.innerHTML = "You're changed just like your ex"; // Change the text content of <h2>
    abcde.style.color = "yellow"; // Change the text color to yellow
    abcde.style.backgroundColor = "#000"; // Change the background color to black
})

// Bulb ON and OFF using DOM manipulation: Toggle bulb color and button text.
var bulb = document.querySelector("#bulb"); // Select the element with id 'bulb'
var btn = document.querySelector("button"); // Select the first <button> element

var flag = 0; // Initialize flag to track the bulb's state (on/off)

btn.addEventListener("click", function(){
    if(flag == 0){ // If the bulb is off (flag = 0)
        bulb.style.backgroundColor = "yellow"; // Turn the bulb on by changing the background to yellow
        console.log("clicked"); // Log the action to the console
        flag = 1; // Update flag to indicate the bulb is now on
        btn.textContent = "OFF"; // Change button text to "OFF"
    }
    else{ // If the bulb is on (flag = 1)
        bulb.style.backgroundColor = "transparent"; // Turn the bulb off by making the background transparent
        console.log("unclicked"); // Log the action to the console
        flag = 0; // Update flag to indicate the bulb is now off
        btn.textContent = "ON"; // Change button text to "ON"
    }
})

// Selecting all <h1> elements: `querySelectorAll` allows you to select all matching elements in a NodeList.
var efgh = document.querySelectorAll("h1"); // Select all <h1> elements on the page
console.log(efgh); // Logs the NodeList of all <h1> elements

// Loop through the NodeList and log each <h1> element to the console
efgh.forEach(function(e){
    console.log(e); // Log each <h1> element individually
})

// Select an element by its ID using `getElementById`
document.getElementById("box"); // Select the element with the id "box"

// Select elements by their class using `getElementsByClassName`
document.getElementsByClassName("newbox"); // Select all elements with the class "newbox"

// Modifying the inner HTML of elements
var box = document.querySelector("#box"); // Select the element with id 'box'
box.innerHTML = "<h1>Hello</h1>"; // Replace the content inside the element with a new <h1> tag

// Modifying the text content of an element (will treat content as plain text, not HTML)
var newBox = document.querySelector(".newbox"); // Select the first element with class "newbox"
newBox.textContent = "<h1>Hello</h1>"; // Set the text content to a string (it will appear as plain text, not HTML)
