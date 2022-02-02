// N1
// const apartment = {
//  imgUrl : "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating : 4,
//   price : 2153,
//   tags : ["premium", "promoted", "top"],
// };
// console.log(apartment);

// N2
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
  
//   owner:{
// name:"Henry",
// phone:"982-126-1588",
// email:"henry.carter@aptmail.com",
// },
//   };

// N3
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line

// N4
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// // Change code above this line

// N5
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// // Change code above this line

// N6
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// // apartment.tags[3] = "trusted";

// apartment.tags.push("trusted") ;
// // Change code below this line

// console.log(apartment.tags)

// apartment.tags.push("trusted") 

// N7
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
  
// };
// apartment.area=60;
// apartment.rooms=3;
// apartment.location = {country: 'Jamaica', city: 'Kingston' }

// N8
// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,


//   // Change code above this line
// };

// N9
// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Change code below this line
  
//   [emailInputName]:"henry.carter@aptmail.com",
//   [passwordInputName]:"jqueryismyjam",
  
//   // Change code above this line
// };

// N10
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
// keys.push(key);
// values.push(apartment[key]);
// } 

// N11
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if(apartment.hasOwnProperty(key)){
//   keys.push(key);
//   values.push(apartment[key]);}

// N12
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
// for (const key in object) {
//   if (object.hasOwnProperty(key)){
//     propCount += 1;
//   }
// }
//   // Change code above this line
//   return propCount;
// }

// N13
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line

// const keys = Object.keys(apartment);

// for (const key of keys) { 
//   values.push(apartment[key]);
// };

// N14
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
  
//  const keys = Object.keys(object);
  
//   for (const key of keys) {
//      propCount += 1;
//      }

//   return propCount;
//   // Change code above this line
// }

// N15

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// N16
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//     const keys = Object.keys(salaries);
    
//     const values = Object.values(salaries);
//     console.log(values)
//   for(const salary of values){
//       totalSalary += salary ;
//   }
//   // Change code above this line
//   return totalSalary;
// }
// // function countTotalSalary(salaries) {
// //   let totalSalary = 0;
// //   for (const salary of Object.values(salaries)) {
// //     totalSalary += salary;
// //   }
// //   return totalSalary;
// // }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }))

// N17
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for( const color of colors){
// hexColors.push(color.hex);
// rgbColors.push(color.rgb) ;
// }

// console.log(hexColors)
// console.log(rgbColors)

// N18
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
  
//     for (const product of products) {
//         if (productName === product.name) {
//             return product.price;
//         }
//     }
//     return null;
// }
// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Dron"));
    
// N19
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//     const property = [];
    
//     for (const product of products) {
//         if ( product[propName]) {
//                property.push(product[propName]); 
//           }
//       }
//      return property; 
//   }
  
    
//   // Change code above this line


// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('quantity'));

// N20

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
  
//     for (product of products) {
//         if (productName === product.name) {
//             return product.price * product.quantity;
//       }
//   }
// return 0;
// }
// console.log(calculateTotalPrice('Radar'))

// N21
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;

// const {yesterday,today,tomorrow}=highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// N22
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {yesterday,
//        today,
//        tomorrow,
//        icon="https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//       } = highTemperatures;

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// N23
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday: highYesterday,
//     today: highToday,
//     tomorrow: highTomorrow,
//     icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(meanTemperature)
// N24
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
  
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// // for (const color of colors) {
// //    const {hex,rgb} = color;
// //   hexColors.push(hex);
// //   rgbColors.push(rgb);
// // }
// for (const {hex,rgb} of colors) {
   
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// N25
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const { today: { low: lowToday,
//                  high: highToday,
//                  icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//                },
//     tomorrow:  { low: lowTomorrow,
//                  high: highTomorrow,
//                  icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//                },
//     } = forecast ;
// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;

// N26
// // Change code below this line
// function calculateMeanTemperature(forecast) {
//   const {today:{low:todayLow,
//                high:todayHigh,},
//          tomorrow:{low:tomorrowLow,
//                   high:tomorrowHigh,}
//         }=forecast
// //   const todayLow = forecast.today.low;
// //   const todayHigh = forecast.today.high;
// //   const tomorrowLow = forecast.tomorrow.low;
// //   const tomorrowHigh = forecast.tomorrow.high;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// N27
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// N28
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores,...secondGroupScores,...thirdGroupScores];
// const bestScore =Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// N29
// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings,...overrideSettings};

// N30
// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line

  
//   return {category,priority,completed,...data};
//   // Change code above this line
// }
// console.log({});
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
// console.log(makeTask({ text: "Buy bread" }));

// N31
// Change code below this line
// function add(...args) {
//    result = 0;
//   for( arg of args){
//   result+=arg;
//   }
//   return result;
//   // Change code above this line
// }
// console.log(add(12, 4, 11, 48))

// N32
// // Change code below this line
// function addOverNum(num,...args) {
//   let total = 0;

//   for (const arg of args) {
//     if(arg>num){
//     total += arg;
//     }
//   }

//   return total;
//   // Change code above this line
// }
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

// N33
// function findMatches(num,...args) {
//   const matches = []; // Don't change this line
// for(arg of args ){
// if(num.includes(arg))
//   matches.push(arg);
// }
//   // Change code above this line
//   return matches;
// }

// Вызов `findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)` возвращает `[1, 2]`
// Вызов `findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)` возвращает `[17, 89, 2]`
// Вызов `findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)` возвращает `[24, 9, 41]`
// Вызов `findMatches([63, 11, 8, 29], 4, 7, 16)` возвращает `[]`

// N34
// const bookShelf = {
//   // Change code below this line
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
  
//   removeBook(bookName){
//   return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName){
//   return `Updating book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };

// N35
// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
//       const rees = this.books.indexOf(oldName);
      
// 	this.books.splice(rees,1,newName);
// 	return this.books
//     // Change code above this line
//   },
// };


// N36
// const atTheOldToad = {
//   // Change code below this line
//   potions:[],
//   // Change code above this line
// };


// N37
// const atTheOldToad = {
//   // Change code below this line
  
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   getPotions(){
//    return this.potions;
//   },
//   // Change code above this line
// };

// N38
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addPotion(potionName) {
//     this.potions.splice(4,0,potionName,);
//       return this.potions;
//     // Change code below this line
//     // Change code above this line
//   },
// };
// console.log(atTheOldToad.addPotion('Invisibility'))
// console.log(atTheOldToad.addPotion('Power potion'))

// N39
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
    
//       const potionsIndex = this.potions.indexOf(potionName)
//     return this.potions.splice(potionsIndex, 1);
//     // Change code above this line
//   },
// };
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));

// N40
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//       const ree = this.potions.indexOf(oldName);
//       if (ree === -1) {
//           return oldName
//       }
//       this.potions.splice(ree,1,newName)
//     // Change code above this line
//   },
// };
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));

// N41
// const atTheOldToad = {
//   potions: [
//      { name: 'Speed potion', price: 460 },
//      { name: 'Dragon breath', price: 780 },
//      { name: 'Stone skin', price: 520 },
//    ],
//    // Change code below this line
//    getPotions() {
//      return this.potions;
//    },
//    addPotion(potionName) {
//      if (this.potions.includes(potionName)) {
//        return `Potion ${potionName} is already equipped!`;
//      }
//      this.potions.push(potionName);
//    },
//    removePotion(potionName) {
//      for(let i=0; i < this.potions.length; i += 1) {
//      	if(this.potions[i].name === potionName) {
//          	this.potions.splice(i, 1)
//          }
//      }
//    },
//    updatePotionName(oldName, newName) {
//      for(let potion of this.potions) {
//        //console.log('potions :>> ', potionss);
//        if(potion.name === oldName) {
//          	potion.name = newName
//          }
//      }
//      // const {potions } = atTheOldToad.potions;
//      // console.log('potions :>> ', this.potions);
//    },
//    // Change code above this line
//  };


// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     if (this.potions.includes(potionName)) {
//       return `Potion ${potionName} is already equipped!`;
//     }
//     this.potions.push(potionName);
//   },
//   removePotion(potionName) {
//     for(let i=0; i < this.potions.length; i += 1) {
//     	if(this.potions[i].name === potionName) {
//         	this.potions.splice(i, 1)
//         }
//     }
//   },
//  updatePotionName(oldName, newName) {
//     for(let obj of this.potions) {
//     	if(obj.name === oldName) {
//         	obj.name = newName
//         }
//     }
//   },
//   // Change code above this line
// };