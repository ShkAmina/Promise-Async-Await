
// // // // // // //Que-1
// // // // // // // function Sum(a, b){
// // // // // // //     return a+b;
// // // // // // //    }

// // // // // // // function Display(batch, month){
// // // // // // //     console.log(`I am from EA${batch} Month: ${month}`);
// // // // // // //    }

// // // // // // // Display(Sum(10, 12),"Feb");

// // // // // // //Que-2


// // // // // // // let count = 0;
// // // // // // //         setTimeout(() => {
// // // // // // //             console.log(++count);
// // // // // // //             setTimeout(() => {
// // // // // // //                 console.log(++count);
// // // // // // //                 setTimeout(() => {
// // // // // // //                     console.log(++count);
// // // // // // //                     setTimeout(() => {
// // // // // // //                         console.log(++count);
// // // // // // //                         setTimeout(() => {
// // // // // // //                             console.log(++count);
// // // // // // //                             setTimeout(() => {
// // // // // // //                                 console.log(++count);
// // // // // // //                                 setTimeout(() =>{
// // // // // // //                                     console.log(++count);
// // // // // // //                                 }, 7000);
// // // // // // //                             }, 6000);
// // // // // // //                         }, 5000);
// // // // // // //                     }, 4000);
// // // // // // //                 }, 3000);
// // // // // // //             }, 2000);
// // // // // // //         }, 1000);

// // // // // // //Que-3

// // // // // // function resolvePromise(alpha, timeout){
// // // // // //     return new Promise((resolve, reject) => {
// // // // // //           setTimeout(() => {
// // // // // //               console.log(alpha)
// // // // // //               resolve("Promise is Resolved Successfully...");
// // // // // //           }, timeout);
// // // // // //     })
// // // // // // }
// // // // // // function Number(){
// // // // // //     resolvePromise('1', 1000)
// // // // // //     .then(()=> resolvePromise("2", 2000))
// // // // // //     .then(()=> resolvePromise("3", 3000))
// // // // // //     .then(()=> resolvePromise("4", 4000))
// // // // // //     .then(()=> resolvePromise("5", 5000))
// // // // // //     .then(()=> resolvePromise("6", 6000))
// // // // // //     .then(()=> resolvePromise("7", 7000))
// // // // // // }
// // // // // // Number();

// // // // // //Que-4

// // // // // const P1 = new Promise((res, rej)=>{
// // // // //     let name = "Amina";
// // // // //     if(name === 'Amina'){
// // // // //         res('My name is Amina');
// // // // //     }
// // // // //     else{
// // // // //         rej('Sorry, Enter valid name.')
// // // // //     }
// // // // // })
// // // // // P1.then((d) => console.log(d)).catch((err) => console.log(err))

// // // // //Que-5
// // // // function print(){
// // // //     setTimeout(()=>{
// // // //         console.log("Hello Prepbytes");
// // // //     }, 1000)
// // // // }
// // // // function Display(print){
// // // //     print();
// // // // }
// // // // Display(print);

// // // //Que-6


// // // setTimeout(()=>{
// // //     console.log("a");
// // //     setTimeout(()=>{
// // //         console.log("b");
// // //         setTimeout(()=>{
// // //             console.log("c");
// // //             setTimeout(()=>{
// // //                 console.log("d");
// // //                 setTimeout(()=>{
// // //                     console.log("e");
// // //                 },10000)
// // //             },8000)
// // //         },6000)
// // //     },4000)
// // // },2000)


// // // Que-7

// // let count = 15;
// //         const promise = new Promise((res, rej)=>{
// //             if(count === 15){
// //                 res("Resloved");
// //             }
// //             else
// //             {
// //                 rej("Failed")
// //             }
// //         });
// //         promise.then((data)=> console.log(data)).catch((error)=>console.log(error))

// //Que-8

// function Dis(nums, timeout){
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log(nums);
//             res("Promise Resolve...!!")
//         }, timeout);
//     })
//     }
//     async function Call(){
//         await Dis("A", 2000);
//         Dis("E", 1000);
//         Dis("I", 4000);
//         Dis("O", 3000);
//         Dis("U", 5000);
//     }
//     Call();

//Que-9

// const promise1 = Promise.resolve(3);
//         const promise2 = 42;
//         const promise3 = new Promise((resolve, reject) => {
//           setTimeout(resolve, 100, 'foo');
//         });
        
//         Promise.all([promise1, promise2, promise3]).then((values) => {
//           console.log(values);
//         });