function SortNumbers(n1, n2, n3) {

    let largest = 0;
    let middle = 0;
    let smallest = 0;

    if (n1 >= n2 && n1 >= n3) {
        largest = n1;
        if (n2 > n3) {
            middle = n2;
            smallest = n3
        } else {
            middle = n3;
            smallest = n2
        }
    } else if (n2 >= n1 && n2 >= n3) {
        largest = n2
        if (n1 > n3) {
            middle = n1;
            smallest = n3;
        } else {
            middle = n3;
            smallest = n1;
        }
    } else {
        largest = n3;
        if (n1 >= n2) {
            middle = n1;
            smallest = n2;
        } else {
            middle = n2;
            smallest = n1;
        }
    }

    console.log(largest);
    console.log(middle);
    console.log(smallest);
}

SortNumbers(0, 1, 0)