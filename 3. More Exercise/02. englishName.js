function englishName(num) {

    let lastDigit = num.toString();
    let lastDigitNum = lastDigit[lastDigit.length - 1];
    let output = ""

    switch (lastDigitNum) {
        case "1": output = "one"; break;
        case "2": output = "two"; break;
        case "3": output = "three"; break;
        case "4": output = "four"; break;
        case "5": output = "five"; break;
        case "6": output = "six"; break;
        case "7": output = "seven"; break;
        case "8": output = "eight"; break;
        case "9": output = "nine"; break;
        case "0": output = "zero"; break;
    }
    console.log(output);
}
englishName(123)