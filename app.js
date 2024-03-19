var GuestList = ['Marium', 'Bilawal', 'Anila'];
//  for(let i=0; i<GuestList.length; i++){
// console.log('Dear ' + GuestList[i] + ', \n\nIt is my pleasure to invite you at dinner.\n\nThank You!\n\n' )};
var absentGuest = 'Marium';
var newGuest = "Waqar";
GuestList[0] = newGuest;
// for(let i=0; i<GuestList.length; i++){
// console.log('Dear ' + GuestList[i] + ', \n\nIt is my pleasure to invite you at dinner.\n\nThank You!\n\n')}
// console.log(`Ms. ${absentGuest} is not coming at dinner.`);
// console.log('Good News! We found big dinner table so we are inviting 3 more guest.') ;
// here, i have added 3 guest in array.
// GuestList.unshift('Hira') ;
// GuestList.splice(2,0,'Hoor') ;
// GuestList.push('Noor') ;
// i have printed 6 guest in array.
// for(let i=0; i<GuestList.length; i++){
//     console.log('Dear ' + GuestList[i] + ', \n\nIt is my pleasure to invite you at dinner.\n\nThank You!\n\n')
// }
// console.log('\nSorry! We are unable to arrange a big table, only two person will be invited.' );
//  we have removed guest from here
// while(GuestList.length > 2)
var remove_guest = GuestList.pop();
// console.log(`Sorry Dear ${remove_guest}, you are not invited for dinner.`);}
// our 2 invited guest.
// for(let i=0; i<GuestList.length; i++){
// console.log('\n\nDear ' + GuestList[i] + ', \n\nYou are still invited at dinner.\n\nThank You!\n\n')}
// I have deleted guest name from Array.
GuestList.splice(0, 2);
console.log(GuestList);
// Excercise # 19
// print a message indicating the number of people you are inviting to dinner.
console.log("Total number of guest are: ".concat(GuestList.length));
