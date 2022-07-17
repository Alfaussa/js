function readNumber() {


    do {
        number = prompt("insert a number", "");
    } while (!isFinite(number));

    if (number === null || number === "") {
        return number;
    } else {
        return number;
    }

}
alert(`Число: ${readNumber ()}`);