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