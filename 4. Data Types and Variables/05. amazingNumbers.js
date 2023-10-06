function amazing(num){
    let numAsString = String(num);
    let sum = 0;

    for(let i = 0; i < numAsString.length; i++){
        sum += Number(numAsString[i]);
    }

    let sumAsString = String(sum);
    let isAmazing = false;
    for (let i = 0; i < sumAsString; i++){
        if (sumAsString[i] == '9'){
            isAmazing = true;
        }
    }
    console.log(`${num} Amazing? ${isAmazing ? 'True' : 'False'}`);
}

amazing(1233);
amazing(999);
amazing(127);
amazing(991);