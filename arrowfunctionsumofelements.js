//3. sum of all elements in a array
let f =[1,2,3,4,5,6,7,8,9];
let add=0;
const sum=()=>{
    for(i=0;i<f.length;i++){
    add+=parseInt(f[i]);
    
}
return add;
}
 console.log(sum());
