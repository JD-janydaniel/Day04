// 1.Do the below programs in anonymous function & IIFE
// a.Print odd numbers in an array
// Solution
// By using anonymous function

var odd =[];
var res = function(arr){
    for( let i=0;i<arr.length;i++){
    if(arr[i]%2!=0)
    odd.push(arr[i]);
    }
   return odd
}
console.log(res([1,2,3,4,5,6,7,8,9,10,11,12,13,14]));

// Solution
// By using IIFE function

let odd =[];
(function(arr){
    for( let i=0;i<arr.length;i++){
    if(arr[i]%2!=0)
    odd.push(arr[i]);
    }
console.log(odd);
})([1,2,3,4,5,6,7,8,9,10,11,12,13,14]);

// 1)b.Convert all the strings to title caps in a string array
// Solution
// By using anonymous function

var titlecase = function (str){
  let arr=[];  
  let str1=str.split(' ');
  for (let i = 0; i < str1.length; i++) {
  let upper= str1[i].charAt(0).toUpperCase()+ str1[i].substr(1);
  arr.push(upper);
   };
    return arr.join(' ');
  }
 console.log(titlecase('hello guvi my name is jany daniel'));

 // Solution
// By using IIFE function

(function(str){
  let arr=[];  
  let str1=str.split(' ');
  for (let i = 0; i < str1.length; i++) {
  let upper= str1[i].charAt(0).toUpperCase()+ str1[i].substring(1);
  arr.push(upper);
   };
  console.log( arr.join(' '));
  })('hello guvi my name is jany daniel')

// 1)c.Sum of all numbers in an array
// Solution
// By using anonymous function

var sum = 0;
let res = function(arr){
    for(let i=0;i<arr.length;i++){
    sum =sum+arr[i];
        }
   return sum;
}
console.log(res([1,2,3,4,5,6,7,8,9,10,11,12,13,14]));

// Solution
// By using IIFE function
 
let sum = 0;
(function(arr){
    for(let i=0;i<arr.length;i++){
        sum =sum+arr[i];
            }
      console.log(sum);
}([1,2,3,4,5,6,7,8,9,10,11,12,13,14]));

// 1)d.Return all the prime numbers in an array
// Solution
// By using anonymous function

var temp =[];
let res= function(arr){
    for( let i=0; i<arr.length;i++){
      let count = 0;
      let num = arr[i];
      if(num==1){
        continue;
      }
        for( let j=2;j<num;j++){
        if(num%j==0){
        count++;
        
    }
}
  if(count==0){
    temp.push(num);
  }
  }
  return temp
}
console.log(res([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));

// Solution
// By using IIFE function

let temp = [];
(function(arr){
    for( let i=0; i<arr.length;i++){
        let count = 0;
        let num = arr[i];
        if(num==1){
          continue;
        }
          for( let j=2;j<num;j++){
          if(num%j==0){
          count++;
          
      }
  }
    if(count==0){
      temp.push(num);
    }
    }
 console.log(temp);
})([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);

// 1)e.Return all the palindromes in an array
// Solution
// By using anonymous function

let temp =[];
let res= function(arr){
  for(var i=0;i<arr.length;i++){
    var num = arr[i].split("").reverse().join("");
    if(num==arr[i]){
      temp.push(num);
       }
    }
  return temp
}
console.log(res(["appa","amma","car","bird","malayalam"]));

// Solution
// By using IIFE function

let temp = [];
(function(arr){
    for(let i=0;i<arr.length;i++){
      let num = arr[i].split("").reverse().join("");
      if(num==arr[i]){
        temp.push(num);
         }
      }
    console.log(temp); 
  })(["appa","amma","car","bird","malayalam"]);

// 1)f.Return median of two sorted arrays of the same size.
// Solution
// By using anonymous function

let res =function (arr1,arr2){
  let arr3=arr1.concat(arr2);
  let newArray=arr3.sort(function(a,b){
    return a-b;
  });
  let length=newArray.length;
  let middleIndex=length/2;
  if(length%2==0){
    return(newArray[middleIndex-1]+newArray[middleIndex])/2
  }
  else{
    return newArray[middleIndex];
  }
}
console.log(res([4,6,3,1,7],[2,5,8,9,10]));

// Solution
// By using IIFE function

(function(arr1,arr2){
  let arr3=arr1.concat(arr2);
  let newArray=arr3.sort(function(a,b){
    return a-b;
  });
  let length=newArray.length;
  let middleIndex=length/2;
  if(length%2==0){
    console.log((newArray[middleIndex-1]+newArray[middleIndex])/2);
  }
  else{
    console.log(newArray[middleIndex]);
  }
})([4,6,3,1,7],[2,5,8,9,10]);


// 1)g.Remove duplicates from an array
// Solution
// By using anonymous function

let res = function(arr) {
    let unique = [];
    for ( let i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
        }
    }
    return unique;
}
console.log(res([2,3,5,7,6,3,8,2]));

// Solution
// By using IIFE function

(function res(arr){
    let unique = [];
    for ( let i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
        }
    }
    console.log(unique);
})([2,3,5,7,6,3,8,2])

// h.Rotate an array by k times
// Solution
// By using anonymous function

let rotate = function (arr,n) {
  for (let i = 0; i < n; i++) {
   arr.unshift(arr.pop());
  }
  return arr;
}
console.log(rotate([1,2,3,4,5,6],2));

// Solution
// By using IIFE function

(function(arr,n) {
  for (let i = 0; i < n; i++) {
   arr.unshift(arr.pop());
  }
  console.log(arr);
})([1,2,3,4,5,6],2);


// 2.Do the below programs in arrow functions.
// a.Print odd numbers in an array
// Solution
// By using arrow function

let odd =[];
let res =(arr)=>{
    for( let i=0;i<arr.length;i++){
    if(arr[i]%2!=0)
    odd.push(arr[i]);
    }
   return odd
}
console.log(res([1,2,3,4,5,6,7,8,9,10,11,12,13,14]));

// 2)b.Convert all the strings to title caps in a string array
// Solution
// By using arrow function

let titlecase = (str)=>{
  let arr=[];  
  let str1=str.split(' ');
  for (let i = 0; i < str1.length; i++) {
  let upper= str1[i].charAt(0).toUpperCase()+ str1[i].substring(1);
  arr.push(upper);
   };
    return arr.join(' ');
  }
 console.log(titlecase('hello guvi my name is jany daniel'));

// 2)c.Sum of all numbers in an array
// Solution
// By using attow function

let sum = 0;
let res = (arr)=>{
    for(let i=0;i<arr.length;i++){
    sum =sum+arr[i];
        }
   return sum;
}
console.log(res([1,2,3,4,5,6,7,8,9,10,11,12,13,14]));

// 2)d.Return all the prime numbers in an array
// Solution
// By using arrow function

let temp =[];
let res=(arr)=>{
    for( let i=0; i<arr.length;i++){
      let count = 0;
      let num = arr[i];
      if(num==1){
        continue;
      }
        for( let j=2;j<num;j++){
        if(num%j==0){
        count++;
        
    }
}
  if(count==0){
    temp.push(num);
  }
  }
  return temp
}
console.log(res([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));

// 2)e.Return all the palindromes in an array
// Solution
// By using arrow function

let temp =[];
let res=(arr)=>{
  for(let i=0;i<arr.length;i++){
    let num = arr[i].split("").reverse().join("");
    if(num==arr[i]){
      temp.push(num);
       }
    }
  return temp
}
console.log(res(["appa","amma","car","bird","malayalam"]));





























