let date = new Date();

let date2 = new Date("1970-01-01T00:00:00");

let elaspedTime = Math.round((date - date2) / 1000);

console.log(`
Year   =>   ${date.getFullYear()}
Month  =>   ${date.getMonth() + 1}
Date   =>   ${date.getDate()}
Day    =>   ${date.getDay() + 1}
Hour   =>   ${date.getHours()}
Minute =>   ${date.getMinutes()}
Elasped Time  =>  ${elaspedTime}
`);
