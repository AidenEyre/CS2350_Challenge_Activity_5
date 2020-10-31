"use strict"; // Use strict JavaScript rules.
/*
   5-5 Challenge: 
   Using Dates, Arrays, Loops, and Conditional Statements

   Author: Aiden Eyre
   Date:   30 October 2020
*/

/**************************************************************************************/
/***************     Part 1: Declare, Initialize and Display Arrays     ***************/
/**************************************************************************************/

// Initialize arrays.
let firstNames = [
  "Sydney",
  "Matt",
  "Alyssa",
  "Raquel",
  "Shane",
  "Garet",
  "Jade",
  "Lauren",
  "Drake",
  "Tristan",
]; // Array of family first names.
let nameRelationship = [
  "Wife",
  "Father",
  "Step-Mother",
  "Mother",
  "Step-Father",
  "Brother",
  "Sister-In-Law",
  "Sister",
  "Step-Brother",
  "Brother",
]; // Array of relationships of the names in the previous array.

// Call the myfamily function.
myFamily();

// Display a table of my family to to the web page.
function myFamily() {
  let myFamilyHTML =
    "<table id='familyTable'>" + "<tr><th>Name</th><th>Relationship</th></tr>"; // Initialize html code for the "My Family" table.

  // Loop through firstNames array and add each person to the "My Family" table.
  for (let i = 0; i < firstNames.length; i++) {
    myFamilyHTML +=
      "<tr>" +
      "<td>" +
      firstNames[i] +
      "</td>" +
      "<td>" +
      nameRelationship[i] +
      "</td>" +
      "</tr>"; // Add table row with first name and relationship.
  }

  // Close off myFamilyHTML code and update the family innerHTML with the new string.
  myFamilyHTML += "</table>";
  document.getElementById("family").innerHTML = myFamilyHTML;
}

/**************************************************************************************/
/*********************     Part 2: Select Items From an Array     *********************/
/**************************************************************************************/

// Initialize an empty array and add eight different colors using push, unshift, and splice.
let colorArray = [];
colorArray.push("blue");
colorArray.push("orange");
colorArray.unshift("red");
colorArray.splice(2, 0, "green", "purple", "brown", "yellow", "pink");

// Call functions for each section.
allColors(); // Call the allColors function.
colorsWithP(); // Call the colorsWithp function.
colorsWithoutB(); // Call the colorsWithoutB function.
colorsNotContainingN(); // call the colorsNotContainingN function.

// Display entire colorArray.
function allColors() {
  // Create string that will list each color from the array in the web page.
  let allColorsHTML = "<ul>";
  for (let i = 0; i < colorArray.length; i++) {
    allColorsHTML += "<li>" + colorArray[i] + "</li>";
  }
  allColorsHTML += "</ul>";
  document.getElementById("allColors").innerHTML = allColorsHTML;
}

// Display colors from colorArray that start with p.
function colorsWithP() {
  // Create string that will list each color from the array in the web page.
  let allColorsHTML = "<ul>";
  for (let i = 0; i < colorArray.length; i++) {
    // If the 0 index of each color of the array equals p, then add to the string.
    if (colorArray[i][0] === "p") {
      allColorsHTML += "<li>" + colorArray[i] + "</li>";
    }
  }
  allColorsHTML += "</ul>";
  document.getElementById("pColors").innerHTML = allColorsHTML;
}

// Display colors from colorArray that don't start with b.
function colorsWithoutB() {
  // Create string that will list each color from the array in the web page.
  let allColorsHTML = "<ul>";
  for (let i = 0; i < colorArray.length; i++) {
    // If the 0 index of each color of the array equals p, then add to the string.
    if (colorArray[i][0] != "b") {
      allColorsHTML += "<li>" + colorArray[i] + "</li>";
    }
  }
  allColorsHTML += "</ul>";
  document.getElementById("nonBColors").innerHTML = allColorsHTML;
}

// Display colors that don't contain the letter 'n'.
function colorsNotContainingN() {
  // Create string that will list each color from the array in the web page.
  let allColorsHTML = "<ul>";
  for (let i = 0; i < colorArray.length; i++) {
    if (containsLetter(colorArray[i], "n") === false) {
      allColorsHTML += "<li>" + colorArray[i] + "</li>";
    }
  }
  allColorsHTML += "</ul>";
  document.getElementById("filterColors").innerHTML = allColorsHTML;
}

// Function to check if a string contains a chosen letter.
function containsLetter(str, letter) {
  // Loop through string and check if each letter is the chosen letter.
  for (var i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      return true; // If found, return true.
    }
  }
  return false; // Return false if nothing is not found.
}

/**************************************************************************************/
/***************************     Part 3: Sorting Arrays     ***************************/
/**************************************************************************************/

// Initialize arrays.
let animals = ["hippo", "dog", "cat", "donkey", "bird", "whale"];
let numArray = [51, 14, -2, 128, 46, 88];
// Initialize string with nothing.

// Display the two arrays.
document.getElementById("twoArrays").innerHTML = displayArray(animals) + displayArray(numArray);

// Display the two arrays that're sorted.
animals.sort();
numArray.sort();
document.getElementById("sortedArrays").innerHTML = displayArray(animals) + displayArray(numArray);

// Display the two arrays that're sorted with the number array correctly sorted.
// By using an arrow compare function, we can correctly sort the number array.
document.getElementById("sortedNumberArray").innerHTML = displayArray(numArray) + displayArray(numArray.sort((a, b) => a-b));


// Function that returns a string of html code displaying array elements.
function displayArray(arr) {
    let twoArraysHTML = "<p>";  // Initialize a string for our HTML code.

    // Loop through animals array adding each animal to the string.
    for(let i = 0; i < arr.length; i++) {
        // Use an if statement to add commas where necessary.
        if(i < arr.length && i != 0) {
            twoArraysHTML += ", ";
        }
        twoArraysHTML += arr[i];
    }

    twoArraysHTML += "</p>";    // End paragraph.
    return twoArraysHTML;   // Return html string.
}


/**************************************************************************************/
/******************     Part 4: Add Dates to the Footer Section     *******************/
/**************************************************************************************/

let lastModified = document.lastModified;
let currentDate = new Date();
let footerDateHTML = "<h4>Last Modified: " + lastModified +
                 "</h4><h4>Current Date: " + currentDate + "</h4>";

document.getElementById("dates").innerHTML = footerDateHTML;