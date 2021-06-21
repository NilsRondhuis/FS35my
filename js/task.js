// Задача 4
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
// };
  

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];

// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);


// Задача 7
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//       name: "Henry Sibola",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//     country: "Jamaica",
//     city: "Kingston",
// };

// console.log(apartment);


// Задача 10
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };

// const keys = [];
// const values = [];

// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key])
// };

// console.log(keys);
// console.log(values);


// Задача 11
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

//   if(apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }

//   // Change code above this line
// }

// console.log(keys);


// Задача 12 

// const countProps = (object) => {
//     let propCount = 0;
    
//     const a = Object.keys(object);
//     propCount += a.length;
//     return propCount;
// };

// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// Задача 13

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };

// const values = [];
//   // Change code below this line
// const keys = Object.keys(apartment);

// console.log(keys);

// for (const key of Object.values(apartment)) {
//     values.push(key);
// }

// console.log(values);


// Задача 18

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
  
//   const getProductPrice = (productName) => {
//     // Change code below this line
//     for (const prod of products) {
        
//         if (prod.name === productName) {
//             return prod.price;
//         }
//     }

//     return null;
//     // Change code above this line
//   }

//   console.log(getProductPrice("Radar"));
//   console.log(getProductPrice("Grip"));
//   console.log(getProductPrice("Scanner"));
//   console.log(getProductPrice("Droid"));
//   console.log(getProductPrice("Engine"));


// Задача 19
// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];
  
// function getAllPropValues(propName) {

//     let newArr = [];
//     for (const prod of products) {
//         // newArr.push(prod[propName]);
//         if (prod[propName]) {
//            newArr.push(prod[propName]);
//         } else {
//            return [];
//         }
//     }
//     return newArr;
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));


// Задача 20
// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];
  
// function calculateTotalPrice(productName) {

//     let total = 0;

//     for (const prod of products) {
        
//         if (prod.name === productName) {
//             total = prod.price * prod.quantity;
//         }
//     }

//     return total;
// };

// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));
  


// Задача 26
// function calculateMeanTemperature(forecast) {
//     const { today: { low: todayLow, high: todayHigh }, tomorrow: { low: tomorrowLow, high: tomorrowHigh} } = forecast;
  
//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }


// console.log(calculateMeanTemperature(
//     { today: {
//          low: 28, 
//          high: 32
//         }, 
//       tomorrow: {
//           low: 25, 
//           high: 29
//         } }));
// console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }));



// Задача 30
// const makeTask = (data) => {
//     const completed = false;
//     const category = 'General';
//     const priority = 'Normal';
    
//     const obj = {
//         completed,
//         category,
//         priority,
//         ...data,
//     };

//     return obj;
// };

// console.log(makeTask({}));
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
// console.log(makeTask({ text: "Buy bread" }));


// Задача 32
// const addOverNum = (firstNum, ...args) => {
//     let total = 0;
  
//     for (const arg of args) {
        
//         if (arg > firstNum) {
//             total += arg;
//         }
//     }
    
//     return total;
// };


// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));


// Задача 33
// const findMatches = (arrayNum, ...args) => {
//     const matches = []; 
  
//     for (let i = 0; i < args.length; i += 1) {
//         const arg = args[i];
        
//         if (arrayNum.includes(arg)) {
//             matches.push(arg)
//         }
//     }

//     return matches;
    
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));


// Задача 35
// const bookShelf = {
//     books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//     updateBook(oldName, newName) {
//         const indexBook = this.books.indexOf(oldName);
//         this.books.splice(indexBook, 1, newName);

//         return this.books;
//     },
// };

// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));


// Задача 40
// const atTheOldToad = {
//     potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//     updatePotionName(oldName, newName) {
//         const indexEl = this.potions.indexOf(oldName);
//         this.potions.splice(indexEl, 1, newName);

//         return this.potions;
//     },
// };

// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));

// Задача 41
const atTheOldToad = {
    potions: [
      { name: 'Speed potion', price: 460 },
      { name: 'Dragon breath', price: 780 },
      { name: 'Stone skin', price: 520 },
    ],
    getPotions() {
        return this.potions;
    },
    addPotion(potionName) {
        this.potions.push(potionName);
        return this.potions;
    },
    removePotion(potionName) {
        for (let i = 0; i < this.potions.length; i += 1) {
            const potion = this.potions[i];
            
            if (potion.name === potionName) {
                this.potions.splice(i, 1);
            }
        }

        return this.potions;
    },
    updatePotionName(oldName, newName) {
        for (let i = 0; i < this.potions.length; i += 1) {
            const potion = this.potions[i];
            
            if (potion.name === oldName) {
                potion.name = newName;
            }
        }

        return this.potions;
    },
};

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));
console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));

  