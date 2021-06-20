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




