# CS2350_Challenge_Activity_5
 Challenge activity 5-5 for my computer science 2350 web development class.

 ****************************** INSTRUCTIONS *****************************************

In this challenge activity you will be displaying the JS skills we have learned in this module. So far we have connected to a .js file, worked with dates, used arrays, created for loops, used if statements, and used JS to write HTML code . In this activity you will create a single web page that demonstrates these JS skills.

You will also be using JS built-in functions. Some we have used, some we have talked about but not yet used, and some we have not talked about. This will demonstrate your ability to expand your JS skills in new ways. Knowing how to learn and implement built-in JS functions expands the many things you can accomplish with JS. I suggest using w3schools as a resource to learn about the JS functions you will use. You may find the following pages helpful.

JavaScript Array Reference (Links to an external site.)
JavaScript Array Iteration Methods (Links to an external site.)
JavaScript String Reference (Links to an external site.)
JavaScript For Loop (Links to an external site.)
JavaScript Sorting Arrays (Links to an external site.)
HTML DOM lastModified Property (Links to an external site.)
HTML DOM innerHTML Property (Links to an external site.)
You will use JS to create the content and functionality described in Parts 1-4 of this assignment. Then you will add style to the web page in Part 5.

 

Getting Started
The arrays.zip file contains the following files

arrays.html
This file is complete. You will make no changes to this file. You will be using JS to add content to the web page.
arrays.js 
This is the file where you will add all the JS code
arrays.css
This is the file where you will add all the style
Add a comment with your name and the date at the top of the arrays.js file
Add a comment with your name and the date at the top of the arrays.css file
Unzip and use these files as the starting point for this activity.

arrays.zip

 

Note: When displaying the HTML and content to the web page, use the innerHTML property.

 

Part 1: Declare, Initialize and Display Arrays
In the arrays.js file add the following.

Declare two arrays. Initialize the first  array with the first names of at least 7 family members. Initialize the second array with your relationship (like father, cousin, etc.) to the family members listed in the first array. 
Use JS and a for loop to create a table that contains the following
a row with table headers for name and relationship
a row for each family member that has a table cell for their first name and a table cell for the relationship
Use the length property of the array to determine how many times to iterate
Generate the tr, th, and td tags using JS and fill them with content from the arrays
Display the table in the div with id="family"
Example:

Name	Relationship
Walter	Uncle
Sally	Mother
Marcus	Father
Scott	Brother
Carol	Sister
John	Cousin
Julie	Cousin
 

Part 2: Select Items From an Array
In the arrays.js file add the following.

Declare an empty array
Add the color strings "red",  "green",  "purple",  "brown",  "yellow", "pink", "blue",  and "orange" to the array using one or more of the following methods
push
unshift
splice
A list of all colors

Use JS and a for/of loop to create an unordered list of all the colors
Generate the ul and li tags using JS and fill them with content from the array
Display the list in the div with id="allColors"
A list of colors that start with p

Use JS, a for/of loop, and an if statement to create an unordered list of colors that start with p
Note: you can access the first letter of a string by using index 0
var myString = "hello";
myString[0] will be "h" 
Generate the ul and li tags using JS and fill them with content from the array
Display the list in the div with id="pColors"
A list of colors that do not start with b

Use JS, a for/of loop, and an if statement to create an unordered list of colors that do not start with b
Generate the ul and li tags using JS and fill them with content from the array
Display the list in the div with id="nonBColors"
A list of colors that contain the letter n

Use the JS Array filter method to create a new array
the new array is to contain all the colors that contain the letter n 
you will need to create a function that returns true when the string contains the letter n and false otherwise
Use a for/of loop to create an unordered list of colors in this new array
Generate the ul and li tags using JS and fill them with content from the new array
Display the list in the div with id="filterColors"
 

Part 3: Sorting Arrays
In the arrays.js file add the following.

Create two arrays
Make one array contain several (5+) different strings.  Make sure that the strings are stored in a jumbled, random order.  Something like "Hotel", "Alpha", "Zebra", "Tagno", etc. 
Make the other array contain several (5+) different numbers including at least one negative number like 7,-5,18, etc.
Two arrays

Display the contents of the arrays in their original, mixed up order
Use JS and the Array toString method (can use the automatic toString if you want) to create two paragraphs, one for each array.
Generate the p tags using JS and fill them with content from the arrays
Display the paragraphs in the div with id="twoArrays"
Three sorted arrays

Use the JS Array sort method to reorder the elements in each of these arrays 
Display the contents of the arrays in their new, sorted order
Notice how the number array is sorted alphabetically instead of numerically
Use JS and the Array toString method (can use the automatic toString if you want) to create two paragraphs, one for each array.
Generate the p tags using JS and fill them with content from the arrays
Display the paragraphs in the div with id="sortedArrays"
A sorted number array

Use a comparison function with the sort method so the number array sorts numerically
Display the contents of the number array again in its new numerically sorted order
Use JS and the Array toString method (can use the automatic toString if you want) to create two paragraphs, one for each array.
Generate the p tags using JS and fill them with content from the number array
Display the paragraph in the div with id="sortedNumberArray"
 

Part 4: Add Dates to the Footer Section
In the arrays.js file add the following.

Declare a variable and store the value of the document.lastModified property in it
Declare a variable and store a Date object with the current date
Use JS to create two h4 elements
Inside the first h4 element put the text 'Last Modified: ' followed by the first variable 
Inside the second h4 element put the text 'Current Date: ' followed by the second variable
Display the h4 elements in the footer with id="dates"
Notice how these are both the same date but in different formats
they are the same date because the document is modified as the JS code is executed
they are different formats because the lastModified property is a string and the current date is a Date object
 

Part 5: Add Style
In the arrays.css file add the following.

Add style to the web page
Add background colors and/or images
Add borders around the sections and the table cells
Add some padding and/or margins
Add some shadows
Add additional style to make the web page look a little nicer