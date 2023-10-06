function pyramid(maxRow) {

    for (let num = 1; num <= maxRow; num++) {
        // let currRow = "";

        // for (count = 1; count <= num; count++){
        //     currRow += num + " ";
        // }

        // console.log(currRow);
        console.log(`${num} `.repeat(num));
    }
}
pyramid(7);