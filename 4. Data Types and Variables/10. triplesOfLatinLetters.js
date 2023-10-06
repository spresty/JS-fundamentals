function trippleLetters(num) {

    for (let i = 0; i < num; i++) {
        let letter1 = String.fromCharCode(i + 97)
        for (let j = 0; j < num; j++) {
            let letter2 = String.fromCharCode(j + 97)
            for (let k = 0; k < num; k++) {
                let letter3 = String.fromCharCode(k + 97)
                console.log(`${letter1}${letter2}${letter3}`);
            }
        }
    }

}

trippleLetters('3');
// trippleLetters(2);