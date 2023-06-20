arr = [1,9,-3,11,-40,-57,34,100,-23]
pnums = 0
for(let i=0; i<arr.length; i++){
    if(arr[i] > 0){
        pnums = arr[i]
    }
    console.log(pnums)
}

Arr = [-60,4,9,78,-17,33,2,-99,8,1,80]
odd = []
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

