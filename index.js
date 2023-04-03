// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.slice(0, letters.length).toLowerCase() === letters.toLowerCase());
}

function matchName(drivers, string) {
  return drivers.filter(driver => driver.name === string);
}