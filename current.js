let user = { name: "John", money: 1000,
[Symbol.toPrimitive](hint) {
alert(`hint: ${hint}`);
return hint == "string" ? `{name: "${this.name}"}` : this.money;
} };
alert(user); // hint: string -> {name: "John"} 
alert(+user); // hint: number -> 1000 
alert(user + 500); // hint: default -> 1500