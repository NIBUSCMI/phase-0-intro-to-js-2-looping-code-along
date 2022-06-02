// Code your solutions in this file

function writeCards(array, event) {
    let finalArray = [];
    for (let i = 0; i < array.length; i++){
        finalArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return finalArray
}
console.log(writeCards(["Nick", "Claudia", "Maverick"], "Birthday"));

function countDown (num) {
    while (num >= 0) {
        console.log(num--)
    }
}
countDown(10);
