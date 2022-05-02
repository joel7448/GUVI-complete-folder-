//2. Convert all strings to title caps in a array string
((...all)=>{
    for(i in all){
        all[i]=all[i].toUpperCase();
    }
    console.log("Uppercased alphabets:",all);
})('a','b','c','d');