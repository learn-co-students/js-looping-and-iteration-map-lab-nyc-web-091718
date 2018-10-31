// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map( function(name){
      return name.toLowerCase();
  })
}

function nameToAttributes(array) {
  return array.map( function (fullname) {
    let splitName = fullname.split(' ')
    return Object.assign({}, {firstName: splitName[0], lastName: splitName[1]})
  }
  );
}

function attributesToPhrase(array) {
  return array.map( function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  }

  );
}
