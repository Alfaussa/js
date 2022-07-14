let x = +prompt("enter first numbers", '');
let n = +prompt("enter first numbers", '');

function pow(x,n) {
    if (n > 1 && n%1 == 0){
    return x**n;
} else {
    alert('whole number')
}
}

alert(pow(x,n));