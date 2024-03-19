// LowerCase

import { title } from "process";

let personName: string = 'Anu Waqar'
console.log('lowerCase:', personName.toLowerCase () ); 

// UpperCase

let personName1: string = "Anu Waqar"
console.log('UpperCase:',personName1.toLocaleUpperCase () );

// Tittle Case
let personName2: string = "Anu Waqar"
console.log('titleCase:', personName2.replace(/\bw/g,c => c.toUpperCase())); //

// simple way to write all sensitive case.
let personName3: string = "Anu Waqar"
console.log('anu waqar\nANU WAQAR\nAnu Waqar');


