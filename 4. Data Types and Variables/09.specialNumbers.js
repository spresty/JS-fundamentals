function specialNumbers(num) {
    

    for (let i = 1; i <= num; i++){
        let sum = 0;
        let iAsString = String(i);
        for (let j = 0; j < iAsString.length; j++){
            sum += Number(iAsString[j]);
        }
        if (sum == 5 || sum == 7 || sum == 11){
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }

   

}
// specialNumbers(15)
specialNumbers(20)