function vacation(peopleCount, groupType, dayOfWeek) {
    let price = 0;

    switch (dayOfWeek) {
        case "Friday":
            if (groupType == "Students") {
                price = 8.45;
            } else if (groupType == "Business") {
                price = 10.90;
            } else if (groupType == "Regular") {
                price = 15;
            }
            break;
        case "Saturday":
            if (groupType == "Students") {
                price = 9.80;
            } else if (groupType == "Business") {
                price = 15.60;
            } else if (groupType == "Regular") {
                price = 20;
            }
            break;
        case "Sunday":
            if (groupType == "Students") {
                price = 10.46;
            } else if (groupType == "Business") {
                price = 16;
            } else if (groupType == "Regular") {
                price = 22.50;
            }
            break;
    }

    let totalPrice = peopleCount * price;

    if (groupType == "Students" && peopleCount >= 30) {
        totalPrice *= 0.85;
    } else if (groupType == "Business" && peopleCount >= 100) {
        let discountedPrice = 10 * price;
        totalPrice -= discountedPrice
    } else if (groupType == "Regular" && (peopleCount >= 10 && peopleCount <= 20)){
        totalPrice *= 0.95;
    }

        console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30, "Students", "Sunday")
