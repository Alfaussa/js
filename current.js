let styles = ['Jazz', 'Blues', 'pop', 'reggi'];

styles.push(' Rock and roll');

let midPos = Math.floor(styles.length -1 /2);

styles[midPos] = 'rock';

styles.shift();
styles.unshift('rap', 'metal')


console.log(styles);
