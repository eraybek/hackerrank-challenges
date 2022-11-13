// Day 1: Arithmetic Operators (10 Days of Javascript)

/* Task

Complete the following functions in the editor below:

1. getArea(length, width): Calculate and return the area of a rectangle having sides length and width.
2. getPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides length and width .
The values returned by these functions are printed to stdout by locked stub code in the editor. */

function getArea(length, width) {
    let area;
    // Write your code here
    area = width * length
    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = 2*(length+width)
    return perimeter;
}