const name = 'Max';
let age = 29;
const hasHobbies = true;

age = 30;

//arrow function with return
const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    'Name is ' +
    userName +
    ', age is ' +
    userAge +
    ' and the user has hobbies: ' +
    userHasHobby
  );
};

    //arrow function with return automaticaly but this only javascript ES 6
// const summarizeUser = (userName, userAge, userHasHobby) => 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby ;
   
   //anonymous function
// const summarizeUser = function(userName, userAge, userHasHobby) {
//   return (
//     'Name is ' +
//     userName +
//     ', age is ' +
//     userAge +
//     ' and the user has hobbies: ' +
//     userHasHobby
//   );
// };

// const add = (a, b) => a + b;
// const addOne = a => a + 1;
const addRandom = () => 1 + 2;

// console.log(add(1, 2));
// console.log(addOne(1));
console.log(addRandom());

console.log(summarizeUser(name, age, hasHobbies));
