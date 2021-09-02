// пример с большим куском

// const promise = new Promise((resolve, reject) => {
//     let arr = [];

//     for(let i = 0; i < 1000000; i++) {
//         arr.push(i);
//     }

//     if (arr.length > 10) {
//         resolve({
//             data: arr,
//             size: arr.length,
//         });
//     } else {
//         reject('error');
//     }
// });

// promise
// .then(({ data, size }) => console.log(data))
// .catch()
// .finally()


function createPromise(value) {
    return new Promise((resolve, reject) => {
        let arr = [];
    
        for(let i = 0; i < value; i++) {
            arr.push(i);
        }
    
        if (arr.length > 10) {
            resolve({
                data: arr,
                size: arr.length,
            });
        } else {
            reject('error');
        }
    });
}


// Promise.all([
//     createPromise(100),
//     createPromise(1000),
//     createPromise(1001010)
// ]).then(result => console.log(result));
// Promise.race([
//     createPromise(11),
//     createPromise(5),
//     createPromise(1001010)
// ]).then(result => console.log(result)).catch(error => console.log(error));
// Promise.allSettled([
//     createPromise(100),
//     createPromise(5),
//     createPromise(1001010)
// ]).then(result => console.log(result));