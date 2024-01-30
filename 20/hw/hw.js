let textStr = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!";

let upperCase = textStr.match(/[A-Z]/g);

console.log(upperCase);

let lettersWords = textStr.match(/\b[a-zA-Z]{5}\b/g);

console.log(lettersWords);