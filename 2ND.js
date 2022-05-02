//1. PRINT ODD NUMBERS USING ARROW FUNCTION
let r=[7,8,9,4,5];
const odd=(...n)=>{
    if(n%2!=0){
    return(n.join(""));   
    }
}
for(i=0;i<r.length;i++)
{
    console.log(odd(r[i]));
}

// 2.Convert all strings to title caps

let arr=['a','b','c'];
const titlecaps=(all)=>{
    all=all.toUpperCase();
    console.log(all);
}
for(i=0;i<arr.length;i++){
 titlecaps(arr[i]);
}

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

 //Prime numbers
 let p=[1,2,3,4,5,6,7,8];
 let k=[];
 var count=0;
 const g=(n)=>{
 for(i=0;i<p.length;i++){
     count=0;
     for(j=1;j<=p[i];j++){
         if(p[i]%j==0){
             count++;
         }
     }
     if(count==2){
         k.push(p[i]);
     }
 }
 return k;
    }
     console.log(g());

// Palindrome in arrow function
let pal=['bob','cat','cac','malayalam'];
var count=0;
const palin=()=>{
    for(i=0;i<pal.length;i++){
        count=0;
        
        for(j=0;j<pal[i].length;j++)
        {
            if(pal[i][j]==pal[i][pal[i].length-1-j]){
                count++;
            }
        }
        if(count==pal[i].length)
        {
        console.log(pal[i]);
        }
    }
}     

palin(pal);


