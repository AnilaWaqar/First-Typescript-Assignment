var GuestList = ['Marium', 'Bilawal', 'Anila'];
for (var i = 0; i < GuestList.length; i++) {
    console.log('Dear ' + GuestList[i] + ', \n\nIt is my pleasure to invite you at dinner.\n\nThank You!\n\n');
}
;
var absentGuest = 'Marium';
var newGuest = "Waqar";
GuestList[0] = newGuest;
for (var i = 0; i < GuestList.length; i++) {
    console.log('Dear ' + GuestList[i] + ', \n\nIt is my pleasure to invite you at dinner.\n\nThank You!\n\n');
}
console.log("Ms. ".concat(absentGuest, " is not coming at dinner."));
