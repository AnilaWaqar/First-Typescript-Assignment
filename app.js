var userNames = ['admin', 'Waqar', 'Anila', 'Rohaan', 'Jabbar'];
for (var i = 0; i < userNames.length; i++) {
    if (userNames[i] === 'admin') {
        console.log('Hello admin, would you like to see the status report?');
    }
    else {
        console.log("Hello ".concat(userNames[i], ", you have successfully logged in again!"));
    }
}
