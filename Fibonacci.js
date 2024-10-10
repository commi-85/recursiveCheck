// fibonacci recursive
function fibonacci(n) {
    //cas de base
    if (n === 0) {
        return 0;
    } 

    else if (n === 1) {
        return 1;
    } 
//la fonction s'appelle lui meme
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
console.log(fibonacci(6));
