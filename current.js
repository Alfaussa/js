const makePizza = function (title, callbackk){

    console.log(`starrted to cook ${title}`);
    setTimeout(callbackk, 3000);
}

const eatPizza = function(){
    console.log('starting to eat');
}

const readBook = function() {
    console.log('reading book');
}
makePizza('Pepperoni', eatPizza );
readBook();