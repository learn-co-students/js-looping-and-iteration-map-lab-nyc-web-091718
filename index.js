function lowerCaseDrivers(drivers) {
  let selectedDrivers = drivers.map(function(driverName) {
    return driverName.toLowerCase();
  });
  return selectedDrivers
}

function nameToAttributes(drivers) {
  let selectedDrivers = drivers.map(function(driver){
    let driverFirstName = driver.split(" ")[0];
    let driverLastName = driver.split(" ")[1];
    return {firstName: driverFirstName, lastName: driverLastName}
  });
  return selectedDrivers;
}

function attributesToPhrase(drivers) {
  let driversPhrases = drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  });
  return driversPhrases;
}
