/*
 * Работа с коллекцией (массивом объектов)
 */
// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: false },
// ];
  
// console.table(friends);

// for (const friend of friends) {
//     console.log(friend);
// }


/*
 * Ищем друга по имени
 */

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: false },
// ];

// const findFriendByName = (allFriends, name) => {
//     for (const friend of allFriends) {
//         const nameFriend = friend.name;

//         if (nameFriend === name) {
//             return 'Yes!';
//         }
//     }

//     return 'No!';
// };

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));
// console.log(findFriendByName(friends, 'Mango'));


/*
 * Получаем имена всех друзей
 */

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: false },
// ];

// const getAllNames = (allFriends) => {
//     let arrFriends = [];

//     for (const friend of allFriends) {
//         arrFriends.push(friend.name);
//     }

//     return arrFriends;
// };

// console.log(getAllNames(friends));


/*
 * Получаем имена всех друзей online
 */

const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: false },
];

const getOnlineFriends = (allFriends) => {
    let arrOnFriends = [];

    for (const friend of allFriends) {
        
        if (friend.online) {
            arrOnFriends.push(friend.name);
        }
    }

    return arrOnFriends;
};

console.log(getOnlineFriends(friends));