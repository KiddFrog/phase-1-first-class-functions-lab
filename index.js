const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(){
   const newDrivers = drivers.slice(0,2);
   // console.log(newDrivers);
    return newDrivers
}
returnFirstTwoDrivers();

function returnLastTwoDrivers(){
        const newDrivers = drivers.slice(2,4);
       // console.log(newDrivers);
        return newDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


//The important thing to note is that createFareMultiplier() is not directly multiplying the fare.
// It is creating a new function that can be used to multiply fares by a specific factor.
// This allows for more flexibility and reusability in the code.
// Yes I am aware I can make this a block.

function createFareMultiplier(integer){
    return function fare(price){
        return price * integer
    }
}
//createFareMultiplier(4);
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driversArray, driversFunction){
    if(driversFunction == returnFirstTwoDrivers){
        return driversArray.slice(0,2);
    } else if (driversFunction == returnLastTwoDrivers){
        return driversArray.slice(driversArray.length - 2);
    }
}
