// Code your solution in this file!

let returnFirstTwoDrivers = drivers => drivers.slice(0, 2);
let returnLastTwoDrivers = drivers => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

let createFareMultiplier = function (mult) {
  return function (val) {
    return mult * val
  }
}
let fareDoubler = fare => fare * 2;
let fareTripler = fare => fare * 3;

let selectDifferentDrivers = (drivers, fn) => fn(drivers);

