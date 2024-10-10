function Puissance(x,n){
    //cas de base
if(n===0){
    return 1; 
}
//la fonction s'appelle lui meme
else{
    return x *Puissance(x,n-1);
}
}
console.log(Puissance(3,2))