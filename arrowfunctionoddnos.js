//1.Print odd numbers in a array
let x=[];
((...n)=>{
    for(i in n){
        if(n[i]%2!=0){
            x.push(n[i]);
        }
        
    }
    console.log("Odd elements of the array:",x);
})(5,6,7,8,9);