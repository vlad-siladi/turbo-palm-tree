// N1
// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Пиши код ниже этой строки

//     orderedItems.forEach(function (total) {
//         totalPrice += total
//     })




//     // Пиши код выше этой строки
//     return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]))

// N2
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки


//     numbers.forEach((number) => {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     })
//     // Пиши код выше этой строки
//     return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 4))
// console.log(filterArray([1, 2, 3, 4, 5], 5))

// N3
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки

//     firstArray.forEach((first) => {
//         if (secondArray.includes(first)) {
//             commonElements.push(first);
//         }
//     })

// или

// firstArray.forEach(function (first) {
//     if (secondArray.includes(first)) {
//         commonElements.push(first);
//     }
// })

//     return commonElements;
//     // Пиши код выше этой строки
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]))

// N4
// const calculateTotalPrice = (quantity, pricePerItem) => {
//     // Пиши код выше этой строки
//     return quantity * pricePerItem;
// }

// console.log(calculateTotalPrice(5, 100))
// console.log(calculateTotalPrice(3, 400))


// N5
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;



// N6
// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;

//     orderedItems.forEach((item) => {
//         totalPrice += item;
//     });

//     return totalPrice;
// }

// N7
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];

//     numbers.forEach((number) => {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     });

//     // Пиши код выше этой строки
//     return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3))

// N8

// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];

//     firstArray.forEach((element) => {
//         if (secondArray.includes(element)) {
//             commonElements.push(element);
//         }
//     });

//     // Пиши код выше этой строки
//     return commonElements;
// }

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))

// N9
// function changeEven(numbers, value) {
// Пиши код ниже этой строки
// let result = []
// numbers.forEach(element => {
//     if (element % 2 === 0) {
//         result.push(element + value);

//     }
//     else {result.push(element)
//     }
// })
// return result;
// или
// const result = [];
// numbers.forEach(number => number % 2 === 0
//     ? result.push(number += value)
//     : result.push(number));
// return result;
// Пиши код выше этой строки
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10))

// N10
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки

// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths)

// N11
// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },

//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const titles = books.map(book => book.title);

// N12
// const books = [
//     {
//         title: 'Последнее королевство',
//         author: 'Бернард Корнуэлл',
//         genres: ['приключения', 'историческое']
//     },
//     {
//         title: 'На берегу спокойных вод',
//         author: 'Роберт Шекли',
//         genres: ['фантастика']
//     },
//     {
//         title: 'Красна как кровь',
//         author: 'Ли Танит',
//         genres: ['ужасы', 'мистика']
//     }
// ];
// // Пиши код ниже этой строки

// const genres = books.flatMap((book) => book.genres);

// N13
// const getUserNames = users => {
//     return users.map(user => user.name);

// };

// N14
// const getUserEmails = users => {

//     return users.map(user => user.email)
// };

// N15
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2);

// console.log(evenNumbers)
// console.log(oddNumbers)

// N16
// const books = [
//     {
//         title: 'Последнее королевство',
//         author: 'Бернард Корнуэлл',
//         genres: ['приключения', 'историческое']
//     },
//     {
//         title: 'На берегу спокойных вод',
//         author: 'Роберт Шекли',
//         genres: ['фантастика', 'мистика']
//     },
//     {
//         title: 'Красна как кровь',
//         author: 'Ли Танит',
//         genres: ['ужасы', 'мистика', 'приключения']
//     }
// ];
// // Пиши код ниже этой строки
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((book, index, array) => array.indexOf(book) === index);

// console.log(allGenres)
// console.log(uniqueGenres)

// N17
// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);

// console.log(topRatedBooks)

// N18
// // Пиши код ниже этой строки
// const getUsersWithEyeColor = (users, color) => {
//     return users.filter((user) => user.eyeColor === color)

// };
// // Пиши код выше этой строки

// N19
// // Пиши код ниже этой строки
// const getUsersWithAge = (users, minAge, maxAge) => {
//     return users.filter((user) => user.age >= minAge && user.age <= maxAge)

// };
// // Пиши код выше этой строки

// N20
// const getUsersWithFriend = (users, friendName) => {
//     return users.filter((user) => user.friends.includes(friendName))

// };

// N21
// // Пиши код ниже этой строки
// const getFriends = (users) => {
//     const allFriends = users.flatMap(user => user.friends);

//     return allFriends.filter((friend, index, users) => users.indexOf(friend) === index)
// };
// // Пиши код выше этой строки

// N22
// // Пиши код ниже этой строки
// const getActiveUsers = (users) => {
//     return users.filter((user) => user.isActive === true)
// };
// // Пиши код выше этой строки

// N23
// // Пиши код ниже этой строки
// const getInactiveUsers = (users) => {
//     return users.filter((user) => user.isActive === false)
// };
// // Пиши код выше этой строки

// N24
// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);

// N25
// // Пиши код ниже этой строки
// const getUserWithEmail = (users, email) => {
//     return users.find((user) => user.email === email)
// };
// // Пиши код выше этой строки

// N26
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every((first) => first % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((first) => first % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every((each) => each % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((each) => each % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every((third) => third % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((third) => third % 2 !== 0);

// N27
// // Пиши код ниже этой строки
// const isEveryUserActive = (users) => {
//     return users.every((user) => user.isActive)
// };
// // Пиши код выше этой строки

// N28
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some((first) => first % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((first) => first % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some((second) => second % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some((second) => second % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some((third) => third % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((third) => third % 2 !== 0);

// N29
// // Пиши код ниже этой строки
// const isAnyUserActive = users => {
//     return users.some((user) => user.isActive)
// };
// // Пиши код выше этой строки

// N30
// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((total, value) => total + value, 0);

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;

// N31
// const players = [
//     { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//     { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//     { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//     { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((total, player) => total + player.playtime / player.gamesPlayed, 0);
// console.log(totalAveragePlaytimePerGame)

// N32
// // Пиши код ниже этой строки
// const calculateTotalBalance = users => {
//     return users.reduce((total, user) => total + user.balance, 0)
// };
// // Пиши код выше этой строки

// N33
// // Пиши код ниже этой строки
// const getTotalFriendCount = users => {
//     return users.reduce((total, user) => total + user.friends.length, 0)
// };

// или

// const getTotalFriendCount = users => {
// return users.reduce((total, { friends }) => total + friends.length, 0)
// };

// // Пиши код выше этой строки

// N34
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//     'Ли Танит',
//     'Бернард Корнуэлл',
//     'Роберт Шекли',
//     'Федор Достоевский'
// ];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// N35
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// N36
// const authors = [
//     'Ли Танит',
//     'Бернард Корнуэлл',
//     'Роберт Шекли',
//     'Федор Достоевский',
//     'Говард Лавкрафт'
// ];
// // Пиши код ниже этой строки

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// N37
// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

// console.log(sortedByAuthorName)
// console.log(sortedByReversedAuthorName)
// console.log(sortedByAscendingRating)
// console.log(sortedByDescentingRating)

// N38
// // Пиши код ниже этой строки
// const sortByAscendingBalance = users => {
//     return [...users].sort((a, b) => a.balance - b.balance)
// };
// // Пиши код выше этой строки

// N39
// // Пиши код ниже этой строки
// const sortByDescendingFriendCount = users => {
//     return [...users].sort((a, b) => b.friends.length - a.friends.length)
// };
// // Пиши код выше этой строки

// N40
// // Пиши код ниже этой строки
// const sortByName = users => {
//     return [...users].sort((a, b) => a.name.localeCompare(b.name))
// };
// // Пиши код выше этой строки

// N41
// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//     { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names = books
//     .filter((aut) => aut.rating > MIN_BOOK_RATING)
//     .map((book) => book.author)
//     .sort((a, b) => a.localeCompare(b));

// console.log(names)

// N42

// Пиши код ниже этой строки
// const getNamesSortedByFriendCount = users => {

//     return [...users]
//         .sort((a, b) => a.friends.length - b.friends.length)
//         .map((user) => user.name)
// };
// // Пиши код выше этой строки

// console.log(getNamesSortedByFriendCount)

// N43
// // Пиши код ниже этой строки
// const getSortedFriends = users => {
//     return [...users]
//         .flatMap((user) => user.friends)
//         .filter((friend, index, array) => array.indexOf(friend) === index)
//         .sort((a, b) => a.localeCompare(b))
// };
// // Пиши код выше этой строки

// N44
// // Пиши код ниже этой строки
// const getTotalBalanceByGender = (users, gender) => {
//   return [...users]
//   .filter((user)=>user.gender === gender)
//   .reduce((total,value)=>total+value.balance,0)
// };
// // Пиши код выше этой строки
