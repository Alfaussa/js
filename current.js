let J = "ab";
let S = "aabbccd";

J = J.split('');
S = S.split('');

var matches = S.filter(function(item){
    return J.indexOf(item) > -1
  })
  console.log(matches.length);


//   console.log(s.split('').filter(char => j.includes(char)).join(''));


