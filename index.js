function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
   nameFirst = drivers.split(' ')[0];
	 nameLast = drivers.split(' ')[1];
    return {firstName: FirstName, lastName: LastName}
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
      return `${driver.name} is from ${driver.hometown}`;
    });
}
