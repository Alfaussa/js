let calculator = {
    read() {
     this.one = +prompt("one number", "");
     this.two = +prompt("two number", "");
    },
    sum() {
        return this.one + this.two;
    },
    mul() {
        return this.one * this.two;
    }

};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );