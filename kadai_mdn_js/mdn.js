const x = new Date();
console.log(x.toString()); // Mon Sep 08 1998 14:36:22 GMT-0700 (PDT)


var dateObjectName = new Date();
console.log(dateObjectName);


const date = new Date();
const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];
console.log(date);

