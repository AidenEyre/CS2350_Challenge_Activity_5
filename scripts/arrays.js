"use strict"; // Use strict JavaScript rules.
/*
   5-5 Challenge: 
   Using Dates, Arrays, Loops, and Conditional Statements

   Author: Aiden Eyre
   Date:   30 October 2020
*/

// Initialize an empty array and add eight different colors using push, unshift, and splice.
let colorArray = [];
colorArray.push("blue");
colorArray.push("orange");
colorArray.unshift("red");
colorArray.splice(2, 0, "green", "purple", "brown", "yellow", "pink");


// Call functions for each section.
myFamily();    // Call the myfamily function.
allColors();   // Call the allColors function.
colorsWithP(); // Call the colorsWithp function.


// Display a table of my family to to the web page.
function myFamily() {
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
  ];    // Array of family first names.
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
  ];    // Array of relationships of the names in the previous array.
  let myFamilyHTML = "<table id='familyTable'>" +
                     "<tr><th>Name</th><th>Relationship</th></tr>"; // Initialize html code for the "My Family" table.


  // Loop through firstNames array and add each person to the "My Family" table.
  for(let i = 0; i < firstNames.length; i++) {
    myFamilyHTML += "<tr>" +
                    "<td>" + firstNames[i] + "</td>" +
                    "<td>" + nameRelationship[i] + "</td>" +
                    "</tr>";    // Add table row with first name and relationship.
  }

  // Close off myFamilyHTML code and update the family innerHTML with the new string.
  myFamilyHTML += "</table>";
  document.getElementById("family").innerHTML = myFamilyHTML;
}


// Display entire colorArray.
function allColors() {
    // Create string that will list each color from the array in the web page.
    let allColorsHTML = "<ul>"
    for(let i = 0; i < colorArray.length; i++) {
        allColorsHTML += "<li>" + colorArray[i] + "</li>";
    }
    allColorsHTML += "</ul>";
    document.getElementById("allColors").innerHTML = allColorsHTML;
}


// Display colors from colorArray that start with p.
function colorsWithP() {
    // Create string that will list each color from the array in the web page.
    let allColorsHTML = "<ul>"
    for(let i = 0; i < colorArray.length; i++) {
        // If the 0 index of each color of the array equals p, then add to the string.
        if(colorArray[i][0] === 'p') {
            allColorsHTML += "<li>" + colorArray[i] + "</li>";
        }
    }
    allColorsHTML += "</ul>";
    document.getElementById("pColors").innerHTML = allColorsHTML;
    console.log(allColorsHTML);
}


