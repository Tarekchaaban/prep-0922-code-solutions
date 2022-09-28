function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(2, 2);
console.log('sum', sum);

function convertsHoursToMinutes(hours) {
  return hours * 60;
}
var twoHours = convertsHoursToMinutes(2);
console.log(twoHours);

function getGreeting(name) {
  return 'Hello ' + name;
}
var greetName = getGreeting('Tarek');
console.log(greetName);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var solved1 = addAndMultiplyBy5(10, 5);
console.log(solved1);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var solved2 = multiplyAndDivideBy5(35, 10);
console.log(solved2);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var solved3 = subtractTwoNumbers(22, 7);
console.log(solved3);

function getCircleCircumference(radius) {
  return (2 * 3.1415) * radius;
}
var circleCircumference1 = getCircleCircumference(5);
console.log(circleCircumference1);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Tarek', 'Chaaban');
console.log(fullName);

function cube(number) {
  return number * number * number;
}

var fiveCubed = cube(5);
console.log(fiveCubed);
