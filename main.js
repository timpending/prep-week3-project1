/*
=======================================================

** Week 3 - Project 1 **
*** Function Exercises ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be displayed in the HTML page.

BASIC TRACK: 1-10
ADVANCED TRACK: 11-15
=======================================================
*/


// 1. Create a function that simply returns a string that says something funny
//    when it is called and then displayed into the HTML page.
function funny() {
  return "bumblebee tuna"
}

document.getElementById('q1').innerHTML = funny();

// 2. Define a function called "divideByTwo".
//    It should accept one parameter within a text field called "number" and
//    submitted when a button is clicked.
//    The function should divide the number by two and
//    then displayed into the HTML page.

function divideByTwo(num){
  return num/2
}
document.getElementById('q2Button').addEventListener('click', function(){
  var inputNum = document.getElementById('q2Input').value
  document.getElementById('q2').innerHTML = divideByTwo(inputNum)
})


// 3. Define a function called "greeting".
//    It should accept two parameters within input fields, which will both be first names.
//    The function should display to the HTML page a greeting to both people.
function greeting(name1, name2){
  return 'Hello '+ name1 + ' and ' + name2
}
document.getElementById('q3Button').addEventListener('click', function(){
  let n1 = document.getElementById('q3Input1').value
  let n2 = document.getElementById('q3Input2').value
  document.getElementById('q3').innerHTML = greeting(n1, n2)
})

// 4. Create a function that finds the average of 6 numbers passed in when called
//    and returns the value and is then displayed in the HTML page.
function avgSix(a, b, c, d, e, f) {
  return (a+b+c+d+e+f)/6
}

document.getElementById('q4').innerHTML = avgSix(1, 2, 3, 4, 5, 6)

// 5. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month.
//    Write a function that takes the price per unit and calculates the total for you each month.
//    Since the price of the cashews can change anytime, pass that amount into the function to get your total price.
function amazonMonthlyTotal(unitP){
  let total = (unitP * 6).toFixed(2)
  return '$'+ total
}
document.getElementById('q5').innerHTML = amazonMonthlyTotal(2.99)




// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.
function area (l, w){
  return l*w
}
function perimeter (l, w){
  return 2*w + 2*l
}
document.getElementById('q6a').innerHTML = area(6, 5)
document.getElementById('q6p').innerHTML = perimeter(6, 5)



// 7. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.
function quarter(number){
  return number / 4
}

document.getElementById('q7').innerHTML = quarter(6)



// 8. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, display a statement to the HTML page about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.

function sleepings(hours){
  if (hours>=8 ){
    return 'Great sleeping habits!'
  } else {
    return 'You should sleep more.'
  }
}

document.getElementById('q8').innerHTML = sleepings(9)
document.getElementById('q8').innerHTML = sleepings(6)


// 9. Develop a function that determines a person's age by asking them for their birth year.
function age(year){
  return 2016 - year
}

document.getElementById('q9Button').addEventListener('click', function(){
  document.getElementById('q9').innerHTML = age(document.getElementById('q9Input').value)
})

// 10. Write a function that accepts the following array and separates the people into two teams. Display each team within the HTML page.
//    No names next to each other in the array should be on the same team.
 var teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]
 var teamA = []
 var teamB = []

function split(array){
  for(i=0; i<array.length; i++){
    if (i%2 === 0){
      teamA.push(array[i])
    } else {
      teamB.push(array[i])
    }
  }
}
split(teammates)
document.getElementById('q10a').innerHTML = teamA
document.getElementById('q10b').innerHTML = teamB


// 11. Allow a user to enter a three digit number.
//     Write a function that adds the numbers together.
//     Hint #1: You need to turn a string into an integer.
//     Hint #2: Strings can be treated as arrays too.

function addThree(x, y, z) {
  return x.toString() + y.toString() + z.toString()
}
document.getElementById('q11Button').addEventListener('click', function(){
  let x = document.getElementById('q11Input1').value
  let y = document.getElementById('q11Input2').value
  let z = document.getElementById('q11Input3').value
  document.getElementById('q11').innerHTML = addThree(x, y, z)
})


// 12. You've finally gotten around to counting the change in your piggy bank.
//     Write a function that accepts four parameters from a user (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
//     HINT: Understanding the toFixed method will help you with the format.
function change(q, d, n, p){
  let qVal = q*0.25
  let dVal = d*0.1
  let nVal = n*0.05
  let pVal = p*0.01
  let total = qVal + dVal + nVal + pVal
  return "$" + total.toFixed(2)
}

document.getElementById('q12').innerHTML = change(5, 0, 0, 2)

// ADVANCED TRACK


// A. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits or more than 11 digits, assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//        HINT: You may need to use the charAt method.



// B. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
//     HINT: You may need to use the isNaN method.
       arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"]



// C. Create a die rolling function that accepts no parameters.
//     It rolls two six-sided-dice, adds the two numbers together, and returns a roll value.
//     Display the result in the HTML page.
//     To get the random number rolled by each die, use Math.random and Math.floor.



// D. Using your die roll function above, figure out how many times it would take a user
//     to get around a Monopoly board once. A monopoly board has 40 spaces total.



// E. Write a function that takes a year from a user
//    and reports whether or not it is a leap year.
//    Display the result in the HTML page.
//    Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is. 1900 is not a leapyear, but 2000 is.
