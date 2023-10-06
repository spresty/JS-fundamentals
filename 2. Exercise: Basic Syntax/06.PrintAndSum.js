function printAndSum(num1, num2) {
    let result = "";
    let sum = 0;

    while (num1 <= num2) {
        result += num1 + " ";
        sum += num1
        num1++
    };

    console.log(result);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);