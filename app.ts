let GuestList: String[] = ['Marium','Bilawal','Anila'];
for(let i=0; i<GuestList.length; i++){
    console.log('Dear ' + GuestList[i] + ', \n\nIt is my pleasure to invite you at dinner.\n\nThank You!\n\n' )
    
};
let absentGuest : string = 'Marium'
let newGuest : string = "Waqar" ;

GuestList[0] = newGuest ;
for(let i=0; i<GuestList.length; i++){
    console.log('Dear ' + GuestList[i] + ', \n\nIt is my pleasure to invite you at dinner.\n\nThank You!\n\n')
}
console.log(`Ms. ${absentGuest} is not coming at dinner.`)
