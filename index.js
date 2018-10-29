// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(function(array) {
    return array.toLowerCase();
  });
}

function nameToAttributes(array) {
  return array.map(function (array) {
    const first = array.split(' ')[0];
    const last = array.split(' ')[1];
    return { firstName: first, lastName: last };
  });
}

function attributesToPhrase(array) {
  return array.map(function (array) {
    return `${array.name} is from ${array.hometown}`;
  });
}
