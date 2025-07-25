// Student: Hana Fitria Ganesa

let arrStars = ["*"];

for (let i = 1; i < 4; i++) {
    let lastElement = arrStars[arrStars.length - 1];
    arrStars.push(lastElement.concat("*"));
}

arrStars.forEach(function(star){
    console.log(star);
});

console.log(add(10, 50));
console.log(subtract(10, 50));


function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}
