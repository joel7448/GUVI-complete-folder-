// TASK3 
// Fix the code to get the largest of three.
var f,s,t;          //declaring it outside the function block
var aa = (f,s,t) => {
   
    console.log(f,s,t);
    if(f>s &&f>t){
    console.log(f)}
    else if(s>f && s>t){
    console.log(s)}
    else{
    console.log(t)}
   }
   aa(1,2,3); //function call

//    Fix the code to Sum of all numbers using IIFE function
//    Code:
var arr = [9,8,5,6,4,3,2,1];
let sum=0;
(function() {
 for(i=0;i<arr.length;i++){
 sum+=parseInt(arr[i]);
 }
 console.log(sum);
})(arr);

// Fix the code to gen Title caps.
// Code:
var arr =["guvi", "geek","zen", "fullstack"];
var ano = function(arro) {
 for (var i = 0; i <= arro.length; i++) {
 console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
 }
}
ano(arr);

// Fix the code to return the Prime numbers
const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
 for(let i=2;i<num;i++){
 if(num%i===0 )
 {
 return false;
 }
 }
 return num;
});
console.log(myPrime);

// Fix the code to sum the number in that array
const num = [10, 20, 30, 40,50,60,70,80,90,100] 
sum = (a, b) => a + b
sum = num.reduce((sum,i)=>sum+i,0);
console.log(sum);

// Fix the code to gen Title caps.
var arr = ["guvi", "geek", "zen", "fullstack"];
(function() {
 for (var i = 0; i <= arr.length; i++) {
 console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
 }
})();

//print all odd numbers in an array using IIFE function
var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
console.log(arr.length);
(function() {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 != 0) {
 console.log(arr[i]);
 }}
})();

// Fix the code to reverse.
(function(str){
    str1 = str.split("").reverse().join("");
    console.log(str1); 
   })("abcd");

//    Fix the code to give the below output:
// Sum of odd numbers in an array

var as=[12,34,5,6,2,56,6,2,1];
var s=as.reduce(function(a,c){
 if(c%2!=0)
 {
return a+c;
 }
 return a;});
console.log(s);

// Fix the code to give the below output:
// Swap the odd and even digits

aa = data=>{
 var a=data;
for(i=0;i<a.length-1;i++){
 var l="";
 var s=a[i+1]
 var b=a[i]
 l+=s
 l+=b
 i=i+1
}
if((a.length%2)!=0){
 l+=a[a.length-1]
}
console.log(l);
}
aa("1234");



