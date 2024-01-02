let firstUser = 'Tom';
let secondUser = 'Bob';
let myFirtsArray = [firstUser, secondUser, 'Info about users', true, 100];
let mySecondArray = new Array();
mySecondArray[0]='First value';
mySecondArray[1] = secondUser;
mySecondArray[2] = '0121231234';


myFirtsArray[0]='New user';
console.log(myFirtsArray);
console.log(mySecondArray);

let emptyArr = new Array(10);// [,,,,,,,];
console.log(emptyArr);

let users = [firstUser, secondUser, 'Ros', 'Nick', 'Diana'];
console.log(users.length);
for(let i=0; i<users.length; i++){
    // console.log(`Hello user: ${users[i]}`);
    if(users[i]=='Nick'){
        users[i]='Ros';
    }
}
let moreUsersData = [
    ['Tom', 'email@test.com', 23],
    ['Nick', 'test@test.com', 25]
];

console.log(moreUsersData[0][2]);

for(let i=0; i<moreUsersData.length; i++){
    // console.log(moreUsersData[i][0]);
    for(let c = 0; c<moreUsersData[i].length; c++){
        console.log(`User info ${moreUsersData[i][c]}`);
    }
    console.log('=====');
}



