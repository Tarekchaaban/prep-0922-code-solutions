var person = {
  firstName: 'Tarek',
  lastName: 'Chaaban',
  hobby: 'Soccer'
};
console.log(person);

var fullName = "This person's name is: " + (person.firstName) + ' ' + (person.lastName);
console.log(fullName);

person.job = 'Bus Driver';
var currentJob = "This person's current job is: " + (person.job);
console.log(currentJob);

person.oldJob = 'School Teacher';
var previousJob = "This person's previous job is: " + (person.oldJob);
console.log(previousJob);

console.log(person);
