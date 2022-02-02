// N1
// function checkAge(age) {
//   if (age >= 18) { 
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(18));

// N2
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
  

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   } 

//   return "Access denied, wrong password!";
  
// }
// console.log(checkPassword("mangohackzor"));
//  console.log(checkPassword("jqueryismyjam"));

// N3
// function checkStorage(available, ordered) {
  
//   if (ordered === 0) {
//     return "Your order is empty!";
//   }  if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   } 
//     return "The order is accepted, our manager will contact you";
  
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 150));
// console.log(checkStorage(70, 0));

// N4
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// console.log(fruits);

// N5
// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

// N6
// const fruits = ["apple", "plum", "pear", "orange"];

// fruits[1] = 'peach';
// fruits[3] = 'banana';

//  console.log(fruits);

// N7
// const fruits = ["apple", "peach", "pear", "banana"];

// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength );

// N8
// const fruits = ["apple", "peach", "pear", "banana"];

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];


// console.log(lastElement);
// console.log(lastElementIndex);


// N9

// function getExtremeElements(array) {
  
//   let message;
//   const lastElementIndex = array.length - 1;
  
//   if (message = array) {
//      message =  [message [0] , message[lastElementIndex]];
//   }
//   return message;
  
// }
   
// function getExtremeElements(array) {
//   array.splice(1, array.length - 2)
//   return array;
// }


// function getExtremeElements(array) {
//   const firstElement = array.shift();
//   const lastElement = array.pop();
//   const newArray = [firstElement, lastElement];
//   return newArray;
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
//  console.log( getExtremeElements(["apple", "peach", "pear", "banana"]));

// N10
// function splitMessage(message, delimeter) {
//   let words;
//       words = message.split(delimeter);
  // Change code below this line
  //   if(delimeter===("")){
  //    words = message.split("");
  // }else if (delimeter===(" ")){
  // words = message.split(" ");
  //   } else if (delimeter === ("_")) {
  //    words = message.split("_"); 
  // }
  
  
// if(delimeter){
//      words = message.split(delimeter);
// } else if(delimeter===("")){
//      words = message.split("");}
 
  // return words;
// }

  

  
// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));

// N11
// function calculateEngravingPrice(message, pricePerWord) {
   
//   let totalCost;
//   let long;
//   long = message.split(' ');
//   totalCost = long.length *pricePerWord;

//   return totalCost;
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));

// N12
// function makeStringFromArray(array, delimeter) {
//   let string;
     
  
//   if(delimeter) {
//     string = array.join(delimeter);
//   } else
//     if (delimeter === ('')) {
//   string = array.join(delimeter);
//   }

//   return string;
// }
// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

// N13
// function slugify(title) {
//   let result;
//   let message;
//   message = title.split(" ");
//   result = message.join("-").toLowerCase();
//   return result;

  
// }
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"))

// N14
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];


// const firstTwoEls = fruits.slice (0,2);
// const nonExtremeEls = fruits.slice (1,-1);;
// const lastThreeEls = fruits.slice(-3);;

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// N15
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);

// console.log(allClients);

// N16
// function makeArray(firstArray, secondArray, maxLength) {
    
//   let message;
//   let arrayLength = firstArray.concat(secondArray);
  
//   if(maxLength){
//   message = arrayLength.slice(0,maxLength)
//   }else if(maxLength === 0){
//   message = [];
//  }
//   return message;
    
// }
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

// N17
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i +=1 ) { // Change this line
//   console.log(i);
// }

// N18
// function calculateTotal(number) {
//  // Change code below this line
// let calculateNumber = 0;
//   for( let  i= 1; i <= number; i+=1){
   

//      calculateNumber += i;
//   }
//   return calculateNumber;
  
//   // Change code above this line
// }
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(24));

// N19
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length;  i+= 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// N20
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//  for (const argument of order) {
//     total += argument;
//   }



//   // Change code above this line
//   return total;
// }

//   console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
//   console.log(calculateTotalPrice([164, 48, 291]));

// N21
// function findLongestWord(string) {
//   // Change code below this line
//   let findLongest = string.split(' ');
//   let longestWord = ' ';
//   for (let i = 0; i < findLongest.length; i += 1){
//     if (findLongest[i].length > longestWord.length) {
//       longestWord = findLongest[i]
//     }
//   }

//   return longestWord;
//   // Change code above this line
// }

// console.log(findLongestWord("May the force be with you"));
// console.log(findLongestWord("Google do a roll"));

// N22
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line

//   for( let  i= min; i <= max; i+=1){
   

//      numbers.push  (i);
//   }
//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(14, 20));

// N23
// function filterArray(numbers, value) {
//   let result = [];
//   for (let i = 0; i < numbers.length; i += 1){
//     if (numbers[i] > value) {
//       result.push(numbers[i]);
//     }
//   }
//   return result;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// N24
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   // let result;
//   // if (fruits.includes(fruit)) {
//   //   result = true
//   // } else { result = false }

  
//   // let result = fruits.includes(fruit);
//   // return result;

//   return fruits.includes(fruit) // Change this line
// }

// console.log(checkFruit("mandarin"));
//  console.log(checkFruit("pear"));

// N25
// function getCommonElements(array1, array2) {
//   // Change code below this line
// const uniqueElements = [];
// for (const element of array1){
// if (array2.includes(element)) {
// uniqueElements.push(element);
// }
// }
//  return uniqueElements;
//  // Change code above this line
// }
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]))

// N26

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let vflue of order){
//     total += vflue;
//   }

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// N27
// function filterArray(numbers, value) {
 // Change code below this line
  
//   const filteredNumbers = [];
// for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }


  //for (let i = 0; i < numbers.length; i += 1) {
   // const number = numbers[i];

  //   if (number > value) {
  //     filteredNumbers.push(number);
  //   }
  // }

  // return filteredNumbers;
  // Change code above this line
// }

// N28
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 %7 ;
// const e = 8 % 6;

// N29
// function getEvenNumbers(start, end) {
//    // Change code below this line
//   const numbers = [];
//   for (let i = start; i <= end; i += 1){
//     if (i % 2 === 0) {
//       numbers.push(i);
//     }

//   }
//   return numbers;


//     // Change code above this line
// }
  
// console.log(getEvenNumbers(3, 11));

// N30

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = 10;
//     break
    
//   }
  
// }
// console.log(number);

// N31
// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
      
//       return number;
//     }
//   }

//   // Change code above this line
// }

// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(16, 35, 7));

// N32
// function includes(array, value) {
//   // Change code below this line
//   let result;
// for (let val of array){
//   if(val === value){
//     return result =true
//   }else {  result = false }
//   }
//   return result
//   // Change code above this line
// }
// console.log(includes([1, 2, 3, 4, 5], 3))
// console.log(includes([1, 2, 3, 4, 5], 17))


// репета

// самое маленькое число
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }
// console.log(smallestNumber);


// масив записать в строку
// const friends = ['Mango', 'Poli', 'Kiwi', 'Ajax'];

// // let string = ' ';

// // for (const friend of friends) {
// //   string += friend + ',';
// // };
// // string = string.slice(0, string.length - 1);
// // console.log(string )

// const string = friends.join(',');
// console.log(friends);
// console.log(string);

// скрипт который заменяет каждый символ на противоположный
// const string = 'JavaScript';
// const letters = string.split('');
// // console.log(letters);

// let invertedString = '';
// for (letter of letters) {
//   // console.log(letter);
  
//   // if (letter === letter.toLowerCase()) {
//   //   invertedString += letter.toUpperCase();
//   // } else {
//   //   invertedString += letter.toLowerCase();
//   // }
//   invertedString +=
//     letter === letter.toLowerCase()
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
// }
// console.log(invertedString)