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
