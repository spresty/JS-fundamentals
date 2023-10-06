function ReverseString(currWord){

    let output = "";
    for (let i = currWord.length - 1; i >= 0; i--){
        output += currWord[i];
    }

    console.log(output);
}
// ReverseString("Hello")
// ReverseString("SoftUni")
ReverseString("1234")
