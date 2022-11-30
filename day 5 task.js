//print the odd number in array 
//anonymous function
var arr = [1,2,3,4,5,6,7,8,9];
var odd = function(arr){
    var result = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2 !==0){
            result.push(arr[i])
        }
        
    }
    return result
}
console.log(odd(arr));
//output
//(3) [1,2,3,5,7]

//IIFE
(function odd(arr){
    var result =[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2 !==0){
            result.push(arr[i])
        }
    }
    console.log(result)
})([1,2,3,4,5,6,7,8,9])
//output
//[1, 3, 5, 7, 9]

//Convert all the strings to title caps in a string array
//anonymous function

var arr = ["BHARATHI","RAJA"]

var titleCase = function(arr){
    var result = [];
    
        for(var i=0;i<arr.length;i++){
            var p = arr[i].toLowerCase().split(" ");
            for(var j=0;j<p.length;j++){
                p[j] = p[j].charAt(0).toUpperCase() + p[j].slice(1);
            }
            result.push(p.join(" "));
        }
        return result
}

console.log(titleCase(arr))
//output
// ['Bharathi', 'Raja']

//IIFE

(function titleCase(arr){
    var result = [];
    
        for(var i=0;i<arr.length;i++){
            var p = arr[i].toLowerCase().split(" ");
            for(var j=0;j<p.length;j++){
                p[j] = p[j].charAt(0).toUpperCase() + p[j].slice(1);
            }
            result.push(p.join(" "));
        }    
    console.log(result);
}
)(["bharathi","raja"])

//output
// ['Bharathi', 'Raja']


//sum of all numbers in array
//anonymous function

var a = [1,2,3,4,5];
var add = function(a){
    var sum = 0;
    for(var i=0;i<a.length;i++){
        sum = sum + a[i]
    }
    return sum
}
console.log(add(a));

//output
//15

//IIFE

var sum =0;
(function add(a){
    
    for(var i=0;i<a.length;i++){
        sum = sum + a[i]
    }
    console.log(sum)
})([1,2,3,4,5])

//output
//15

//Return all the prime numbers in an array
//anonymous function

var array = [1,2,3,4,5,6,7,8,9]; 
var isPrime=function (num) {
  for (let start = 2; num > start; start++) {
    if (num % start == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime));
//output
//[2,3,5,7]

//IIFE
(function isPrime(array){
    for (let start = 2; num > start; start++) {
        if (num % start == 0) {
          return false;
        }
      }
      return num > 1;
    
    
    console.log(array.filter(isPrime));}
    )([1,2,3,4,5,6,7,8,9])

//Return all the palindromes in an array
//anonymous function

var arr =["racecar","guvi"]
var palindrome = function(arr){
    var result =[];
    for(var i=0;i<arr.length;i++){
        var p = arr[i].split("").reverse().join("")
        if(p === arr[i]){
            result.push(arr[i])
        }
    }
    return result
}
console.log(palindrome(arr))

//output
//['racecar']


//IIFE

(function palindrome(arr){
    var result = [];
    for(var i=0;i<arr.length;i++){
        var p = arr[i].split("").reverse().join("")
        if(p === arr[i]){
            result.push(arr[i])
        }
    }
    console.log(result)
})(["guvi","racecar","redivider"])

//output
//['racecar', 'redivider']


//Remove duplicates from an array
//anonymous function

var arr = ["car","bike","cycle","car","bus"]
var removeDuplicate = function(arr){
    var result = [];
    for(var i=0;i<arr.length;i++){
        if(!result.includes(arr[i])){
            result.push(arr[i])
        }
    }
    return result
}
console.log(removeDuplicate(arr))

//output
// ['car', 'bike', 'cycle', 'bus']

//IIFE

(function removeDulicate(arr){
    var result = [];
    for(var i=0;i<arr.length;i++){
        if(!result.includes(arr[i])){
            result.push(arr[i])
        }
    }
    console.log(result)
})(["car","bike","cycle","car","bus"])

//output
//['car', 'bike', 'cycle', 'bus']


//rotate an array k times

var arr = [1,2,3,4,5,6];
var result = function(arrRotate,k){
  for(var i=0;i<k;i++){
    arr.push(arr[i])
  }
  for(var i=0;i<k;i++){
    arr.shift()
  }
  return arr;
}
console.log(result(arr,3))

//output
//[4, 5, 6, 1, 2, 3]

//IIFE

(function rotate(arr,k){
    for(var i=0;i<k;i++){
        arr.push(arr[i])
    }
    for(var i=0;i<k;i++){
        arr.shift()
    }
    console.log(arr)
})([1,2,3,4,5,6],3)

//output
//[4, 5, 6, 1, 2, 3]

// return median of two sorted array of same size
const arr1=[1,3,5,7]
const arr2=[2,4,6,8]

var findMedianOfTwoArrays= function (ar1,arr2){
    let arr=[...arr1,...arr2]
    arr.sort((a,b)=> a-b)
    var medianIndex=Math.floor(arr.length/2)
    return median=arr.length %2 ===1 ? arr[medianIndex]:(arr[medianIndex-1]+[medianIndex])/2
}
console.log(findMedianOfTwoArrays(arr1,arr2));

//output
//10

//IIFE

(function findMedianOfTwoArrays(ar1,arr2){
    let arr=[...arr1,...arr2]
    arr.sort((a,b)=> a-b)
    var medianIndex=Math.floor(arr.length/2)
    return median=arr.length %2 ===1 ? arr[medianIndex]:(arr[medianIndex-1]+[medianIndex])/2

console.log(findMedianOfTwoArrays(arr1,arr2))})([1,3,15,18,21],[2,4,17,19,22])

//Arrow function

//print odd number in array

var arr = [1,2,3,4,5,6,7,8,9]
var odd = (arr)=>{
    var result =[]
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2 !=0){
            result.push(arr[i])
        }
    }
    return result
}
console.log(odd(arr))

//output
//[1,3,5,7,9]

//Sum of all numbers in an array

var arr = [1,2,3,4,5,6,7,8,9,10]
var add = (arr) =>{
    var sum = 0;
    for(var i=0;i<arr.length;i++){
        sum = sum + arr[i]
    }
    return sum
}
console.log(add(arr))

//output
//55

//Convert all the strings to title caps in a string array

var arr = ["red","YELLOW","green"];
var titleCase = (arr) =>{
    var result = [];
    for(var i=0;i<arr.length;i++){
        var p = arr[i].toLowerCase().split(" ")
        for(var j=0;j<p.length;j++){
            p[j] = p[j].charAt(0).toUpperCase() + p[j].slice(1)
        }
        result.push(p.join(" "))
    }
    return result
}
console.log(titleCase(arr))

//output
//['Red', 'Yellow', 'Green']

//Return all the prime numbers in an array

var array = [1,2,3,4,5,6,7,8,9]; 
var isPrime=(num)=> {
  for (let start = 2; num > start; start++) {
    if (num % start == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime));
//Return all the palindromes in an array

var arr = ["racecar","guvi"]
var palindrome = (arr) =>{
    var result =[];
    for(var i=0;i<arr.length;i++){
        var p = arr[i].split("").reverse().join("")
        if(p === arr[i]){
            result.push(arr[i])
        }
    }
    return result
}
console.log(palindrome(arr))

//output 
//['racecar']