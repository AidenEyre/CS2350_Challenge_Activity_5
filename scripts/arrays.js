"use strict"; // Use strict JavaScript rules.
/*
   5-5 Challenge: 
   Using Dates, Arrays, Loops, and Conditional Statements

   Author: Aiden Eyre
   Date:   30 October 2020
*/

myFamily(); // Call the myfamily function.

// Display an array of my family.
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
