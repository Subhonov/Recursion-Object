// 1-topshiriq

// 1-masala
// let enterNumber = prompt("Enter number");

// function reverseNumber(num) {
//     return (num.split("").reverse().join(""))-0
// }
// alert(reverseNumber(enterNumber))

// }
// myFunc(546)

// 2-masala
// function faktrialFunc(x) {

//     if(x===0){
//         return 1;
//     }
//     else {
//         return x*faktrialFunc(x-1)
//     }
// }
// console.log(faktrialFunc(5));

// 3-masala
// function compareAges(obj1, obj2) {
//     if (obj1.age > obj2.age) {

//       console.log(obj1.name);
//     }
//     else{
//       console.log(obj2.name);
//     }
//   }

//   let person1 = {
//     name: "Islom",
//     age: 20
//   };

//   let person2 = {
//     name: "Bobur",
//     age: 26
//   };

//   compareAges(person1, person2);

// 4-masala
// function printNumbers(n) {
//     if (n > 0) {
//       printNumbers(n - 1);
//       console.log(n);
//     }
//   }

//   // Masalan, 5 sonigacha bo'lgan sonlarni chiqarish
//   printNumbers(5);

// 5-masala
// let user={name:"Shahboz"}
// let age={age:25}
// let userjob={job: "Developer"}

// function userFunc(userName){
//     let newArry=[]
//     newArry.push(userName)

// }
// userFunc(user, age, userjob)

// 6-masala
// let salaries={
//     aXodim:150,
//     bXodim:180,
//     cXodim:210
// }

// function myFunction(obj) {
//     let res=0;
//     for (let key in obj){
//         res+=obj[key]
//     }
//     return res;
// }
// console.log(myFunction(salaries));

// 7-masala
// let arry=[2,23,13,1,3,43,16];
// let maxArr=arry[1];
// function myFunction(arr) {
//     for(let num of arr){
//         if(num > maxArr){
//             maxArr=num
//             console.log(maxArr);
//         }

//     }
// }

// 8-masala
// let arr=[2,4,6,7,true,false,undefined,null]
// function canculeteNumbers(num){
//     let sum=0
//     for(let i=0; i<num.length; i++){
//         if(typeof num[i]=="undefined"){
//             num[i]=0
//         }
//         sum+=num[i]
//     }
//     console.log(sum);
// }
// canculeteNumbers(arr)

// ---------------------------------------------2-topshiriq
// myFunction(arry)
// let arr = [
//     {
//       name: "Abdulloh",
//       age: 21,
//       status: false
//     },
//     {
//       name: "Botir",
//       age: 18,
//       status: true
//     },
//     {
//       name: "Shokir",
//       age: 12,
//       status: false
//     }
//   ];

// function myFunc(arry){
//     for(let nic of arry){
//         if(nic.status===false){
//             console.log(nic);
//         }
//     }
// }
// myFunc(arr)

//   2-masala
// let enterNumber = prompt("enter your number") - 0;
// function myFunc(sizeArr) {
//     let res = 0;
//     for (let i = 0; i < sizeArr; i++) {
//         res += i;
//     }
//     console.log(res);
// }
// myFunc(enterNumber);

// 3-masala
// let arr1 = [10, 23, 12, 2];
// let arr2 = [13, 3, 12, 2];
// function myFunc(a, b) {
//     let finedArr=[] /* 12,2 */
//     for (let i = 0; i < a.length; i++) {

//         for (let j = 0; j < b.length; j++) {
//             if (a[i] == b[j]) {
//                 finedArr.push(a[i]);
//             }
//         }

//     }
//     console.log(finedArr);
// }
// myFunc(arr1, arr2);

// 4-misol
// let arr1 = [10, 23, 12, 2];
// let arr2 = [13, 3, 12, 2];
// function myFunc(a, b) {
//     let finedArr=[] /* 12,2 */
//     for (let i = 0; i < a.length; i++) {

//         for (let j = 0; j < b.length; j++) {
//             if (a[i] == b[j]) {
//                 finedArr.push(a[i]);
//             }
//         }

//     }
//     let maxArr=finedArr[0]
//     for(let num of finedArr){
//         if(num>maxArr){
//             maxArr=num
//         }
//     }
//     console.log(maxArr);
// }
// myFunc(arr1, arr2);

// 5-misol
// let enterNumber = prompt("Son kriting") - 0;

// function finedFac(size) {
//     for (let i=1; i<=size; i++) {
//         console.log(size[i]);
//     }
// }
// finedFac(enterNumber);

// ---------------------------------3-topshiriq-------------------
// function createArray(size) {
//     let arr = [];
//     for (let i = 0; i < size; i++) {
//       let obj = {
//         id: i + 1,
//         name: `Object ${i + 1}`
//       };
//       arr.push(obj);
//     }
//     console.log(arr);
//   }

//   createArray(5);

// 2-misol
// let arr=[1,1,2,2,3,3,4,4,5,5]
// function dontReapatFunc(arr){
//     let resArr=[]
//     for(let num of arr){
//         if(!resArr.includes(num)){
//             resArr.push(num)
//         }
//     }
//     console.log(resArr);
// }
// dontReapatFunc(arr)

// 3-misol
// let findNumber = prompt("son kriting") - 0;
// let arry = [12, 23, 43, 54, 32, 1];

// function findIndexfunc(number, arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == number) {
//             console.log(i);
//         }
//     }
// }
// findIndexfunc(findNumber, arry);

// 5-misol
// let arr=[1,2,3,4,5]
// function myFunc(arry){
//     let maxArr=arry[0]+arry[1]
//     for(let i=0; i<arry; i++){
//         if((arry[i]+arry[i+1])>maxArr){
//             maxArr=arry[i]+arry[i+1]
//         }
//     }
//     console.log(maxArr);
// }
// myFunc(arr)
