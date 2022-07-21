function unique(strings) {
    
let result = [];



    for (let str of strings) {
    if (!result.includes(str)){
        result.push(str);
    }
}
    return result;
}

let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"
];
console.log( unique(strings) ); 