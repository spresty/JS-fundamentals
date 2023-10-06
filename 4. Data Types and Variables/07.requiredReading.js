function reading(numberOfPages, pagesPerHour, daysToRead) {

    let totalTimeToRead = numberOfPages / pagesPerHour;
    let dailyReading = totalTimeToRead / daysToRead;

    console.log(dailyReading);
}
reading(212,

    20,

    2);
reading(432,

    15,

    4);
