// single comment
/* multiple commment*/

// console.log("console");
// console.error("console");
// console.warn("console");
// console.info("console");

// window.alert("deneme37");
// alert("deneme37");


//////////////////////////////////////////////////////////////////////////////////

// var dataValue = 14;
// console.log(dataValue);

// var dataValue44 = 44;
// console.log(dataValue44);

// var _dataValue44 = 44;
// console.log(_dataValue44);

// var $_dataValue44 = 44;
// console.log($_dataValue44);

// var `~&444$_dataValue44=44;

// var data = 99;
// console.log(typeof data);

// var data = "Kelime";
// console.log(typeof data);

// var data = 3 > 1;
// console.log(typeof data);

// // hoisting
// data = 56566;
// var data;
// console.log(data);

//////////////////////////////////////////////////////////////////////////////////

// var globalVariable = "String-1"
// console.log(globalVariable);

// var globalVariable = "String-2"
// console.log(globalVariable);

// let localVariable = true;
// localVariable = false;

// const localVariable1 = true;

//////////////////////////////////////////////////////////////////////////////////
// Operatorler
// + - * / % ! &&=VE ||=VEYA
// x++ ,  ++x , x-- , --x
// x++;
// x=x+1;
// x+=1;

//////////////////////////////////////////////////////////////////////////////////
// let userData=prompt("Lütfen adınızı giriniz "); //Kullanıcıdan girdi alma
// console.log(userData);

//Infinity
console.log(4/0);

//NaN
console.log(4/"asd");

//Undefined
let data;
console.log(data);

//////////////////////////////////////////////////////////////////////////////////
// Cast
console.log(4+4);
console.log(4+ Number("4"));
console.log(4+ parseInt("4"));
console.log(4+ String(4));

// Math
console.log(Math.min(2,1,-500,6,900));
console.log(Math.max(2,1,-500,6,900));
console.log(Math.abs(-500));
console.log(Math.sqrt(16));
console.log(Math.pow(2,5));

console.log(Math.floor(2.9));
console.log(Math.ceil(2.1));
console.log(Math.round(5.4));
console.log(Math.round(5.5));

console.log((Math.random()*9+1).toFixed(3));
console.log(Math.floor((Math.random()*9+1).toFixed(3)) );

console.log(Math.sin(-1));

///////////////////////////////////////////////////////////////// 
// Function 
// 1
// function returnsuzParametresiz(){
//     console.log("returnsuz Parametresiz");
// }
// returnsuzParametresiz();

// // 2
// function returnsuzParametreli(uname){
//     console.log("returnsuz Parametreli "+uname);
// }
// returnsuzParametreli("Hamit.")


// // 3
// function returnluParametresiz(){
//    return "returnlu Parametresiz";
// }
// const data3= returnluParametresiz();
// console.log(data3);


// // 4
// function returnluParametreli(uname,usurname){
//     return "returnlu Parametreli "+uname+usurname;
//  }
//  const data4= returnluParametreli("Hamit", "Mızrak");
//  console.log(data4);

///////////////////////////////////////////////////////////////// 
// Function 
function normFunction(){
    console.log("Norm Funciton");
}
normFunction();

// Anonymous
let anonymousFunction=function(){
    console.log("Anonymous Funciton");
}
anonymousFunction();

// Arrow
const arrowFunciton= () =>{
    console.log("Arrow Funciton");
}
arrowFunciton();

// Immedia Function
(function(){
    console.log("Immedia Anonymous Function");
})()

(()=>{
    console.log("Immedia Arrow Function");
})()

//////////////////////////////////////////////////////////////////
// Conditional



//////////////////////////////////////////////////////////////////
// Loop 




//////////////////////////////////////////////////////////////////
// Dizi 





//////////////////////////////////////////////////////////////////
// Object 


//////////////////////////////////////////////////////////////////
// Event 
// LocalStorage
// setInterval(()=>{},2000) setTimeOut(()=>{},3000)


//////////////////////////////////////////////////////////////////
// DOM 
// Listeners
////////////////////////////////////////////////////////////////////
// Form input Handling && jQuery

// callback, promise, asyn-await