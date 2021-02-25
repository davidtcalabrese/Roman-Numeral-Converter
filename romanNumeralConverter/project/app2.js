const arabicInput = document.getElementById("arabicInput");

arabicInput.addEventListener("input", (e) => {
  romanInput.value = convert(e.target.value);
});



let key = [
    { number: 1000, roman: 'M'},  //0
    { number: 900, roman: 'CM'},  //1
    { number: 500, roman: 'D'},   //2
    { number: 400, roman: 'CD'},  //3
    { number: 100, roman: 'C'},   //4
    { number: 90, roman: 'XC'},   //5
    { number: 50, roman: 'L'},    //6
    { number: 40, roman: 'XL'},   //7
    { number: 10, roman: 'X'},    //8
    { number: 9, roman: 'IX'},    //9
    { number: 5, roman: 'V'},     //10
    { number: 4, roman: 'IV'},    //11
    { number: 1, roman: 'I'}     //12 
]

function convert(arabicNumber) {
    let romanLetter = '';
    let number = arabicNumber;
    for (let i=0; i<key.length; i++ ) {
        if (key[i].number <= number) {
            number -= key[i].number;
            romanLetter += key[i].roman;
            i--;
        }
        console.log(`My number ${number} + ${romanLetter} in Roman Numerals`);

    }
    console.log(`My number ${arabicNumber} is ${romanLetter} in Roman Numerals`);

    
}
convert(437);