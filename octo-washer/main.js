// calculate drop-off cost

function serviceRate( weight ) {

    const MINIMUM_COST = 13.00;
    const COST_PER_POUND = 1.25;

    let rate = COST_PER_POUND * weight;
    if ( rate <= MINIMUM_COST ) {
        console.log(rate, 'first rate');
        let lowWeight = (MINIMUM_COST * 0.0825);
        console.log(lowWeight, 'lowWeight')
        rate = lowWeight;
        console.log(rate, 'second');
    return "Your weight is low, your service will be the set minimum cost " + lowWeight; 
    } else {
        let totalRate = rate * 0.0825 + rate;
        console.log(totalRate, rate)
        rate = totalRate;
    return "your total rate has been calculated with tax" + totalRate.toFixed(2);
    }
};


function calculateDropOffCost( rate ) {

    rate = serviceRate();
    const tax = 0.0825;
    totalCost = rate + tax;
    return "Your total is " + totalCost;
};

console.log( calculateDropOffCost( 13 ) );

// self-service calculator
function calculateSelfServiceCost( washerPrice, numOfWashers, dryerMinutes, numOfDryers ) {
    const quarter = 0.25;

    const dryerMinutesPerQuarter = [
        sm_Dryer = 8,
        m_Dryer = 6,
        l_Dryer = 5,
        xl_Dryer = 4
    ];
}

