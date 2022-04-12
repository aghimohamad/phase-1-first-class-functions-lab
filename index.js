const returnFirstTwoDrivers = function(arr){
    return arr.slice(0, 2);
}
const returnLastTwoDrivers = function(arr){
    return arr.slice(-2);
}

const selectingDrivers = [
    returnFirstTwoDrivers,
     returnLastTwoDrivers
    ]

function createFareMultiplier(fare){
    return function(num){
        return fare * num ;
    }
}

function fareDoubler(fare){
    return createFareMultiplier(fare)(2)
    
 }

 function fareTripler(fare){
    const tr = createFareMultiplier(fare)
    return tr(3)
}

function selectDifferentDrivers(drivers, arr){
    return arr(drivers)
}

console.log(fareDoubler(10))

