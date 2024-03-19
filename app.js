"use strict";
// LowerCase
Object.defineProperty(exports, "__esModule", { value: true });
var personName = 'Anu Waqar';
console.log('lowerCase:', personName.toLowerCase());
// UpperCase
var personName1 = "Anu Waqar";
console.log('UpperCase:', personName1.toLocaleUpperCase());
// Tittle Case
var personName2 = "Anu Waqar";
console.log('titleCase:', personName2.replace(/\bw/g, function (c) { return c.toUpperCase(); })); //
// simple way to write all sensitive case.
var personName3 = "Anu Waqar";
console.log('anu waqar\nANU WAQAR\nAnu Waqar');
