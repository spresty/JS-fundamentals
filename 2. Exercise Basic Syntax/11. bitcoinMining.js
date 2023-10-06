function btcMining (input){

    let counter = 1;
    let totalGold = 0
    let totalBgn = 0;
    let btcPrice = 11949.16;
    let boughtBtc = 0
    let firstDayPurchase = 0;
    let confirmFirstDayPurchase = 0;

    for (let i = 0; i < input.length; i++){
        let dailyGold = Number(input[i]);
        if (counter % 3 == 0){
            dailyGold *= 0.70;
        }
        totalGold += dailyGold 
        totalBgn += dailyGold * 67.51;
        if (totalBgn >= btcPrice){
           boughtBtc += Math.floor(totalBgn / btcPrice)
           totalBgn = totalBgn % btcPrice
           confirmFirstDayPurchase++
            if(confirmFirstDayPurchase == 1){
                firstDayPurchase = i + 1;
            }
        }
        counter++
    }

    console.log(`Bought bitcoins: ${boughtBtc}`);
    if (boughtBtc >= 1){
        console.log(`Day of the first purchased bitcoin: ${firstDayPurchase}`);
    }
    console.log(`Left money: ${totalBgn.toFixed(2)} lv.`);
}
btcMining([100, 200, 300])
// btcMining([3124.15, 504.212, 2511.124])
// btcMining([50, 100])