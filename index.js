// Code your solution in this file!
const returnFirstTwoDrivers = function (driversArray) {
  return driversArray.slice(0, 2);
}

const returnLastTwoDrivers = function (driversArray) {
  return driversArray.slice(driversArray.length - 2)
}

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
];
