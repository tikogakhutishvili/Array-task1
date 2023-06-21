let arr = [1,9,-3,11,-40,-57,34,100,-23]
let pnums = []
for(let i=0; i<arr.length; i++){
    if(arr[i] > 0){
        pnums.push(arr[i])
    }
}
console.log(pnums)
// task 2

let Array = ["tiko", 1, -44, true, "nazibrola",56, "nazibrola", false, 88,-44 ]
let nodouble = []
for (let i = 0; i < Array.length; i++){
    if(!nodouble.includes(Array[i])){
     nodouble.push(Array[i])
    } 
}
console.log(nodouble)


// task 3
let Arr = [-60,4,9,78,-17,33,2,-99,8,1,80]
let odd = []
even = []
for(let i = 0; i < Arr.length; i++){
    if(Arr[i]%2 === 0 && Arr[i] !== 0){
     odd.push(Arr[i])
    }
    else {
       even.push(Arr[i])
    }
}   
console.log(odd)
console.log(even)

