// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  return drivers.map(function(name) {return name.toLowerCase()});
}

function nameToAttributes(drivers) {
  return drivers.map(function(name) {
    const nameFirst = name.split(" ")[0];
    const nameLast =  name.split(" ")[1];
    return {firstName: nameFirst, lastName: nameLast};
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function(object){
    return `${object.name} is from ${object.hometown}`;
  });
}
