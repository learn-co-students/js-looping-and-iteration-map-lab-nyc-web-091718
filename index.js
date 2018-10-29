// Code your solution in this file.
function lowerCaseDrivers(drivers){
  const lcDrivers = drivers.map(function(driver) {
    return driver.toLowerCase();
  });
  return lcDrivers;
}

function nameToAttributes(drivers){
  const objDrivers = drivers.map(function(driver){
    let splitName = driver.split(' ');
    return {firstName: splitName[0], lastName: splitName[1]};
  });
  return objDrivers;
}

function attributesToPhrase(drivers){
  const phraseDrivers = drivers.map(function(driver){
    const keys = Object.keys(driver);
    if (keys[0] === 'name' && keys[1] === 'hometown'){
      return `${driver[keys[0]]} is from ${driver[keys[1]]}`
    }
    else {
      return driver;
    }
  });
  return phraseDrivers;
}
