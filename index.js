// Code your solution in this file.
function lowerCaseDrivers(drivers){
  let retArray = drivers.map(function(driver){return driver.toLowerCase();});
  return retArray;
}
function nameToAttributes(drivers){
  let retArray = drivers.map(function(driver){
    let fullName = driver.split(' ');
    let fname = fullName[0];
    let lname = fullName[1];
    let obj = {};
    obj["firstName"] =  fname;
    obj["lastName"] = lname;
    return obj;
    }
  );
  return retArray;
}
function attributesToPhrase(drivers){
  let retArray = drivers.map(function(driver){
    let name = driver["name"];
    let town = driver["hometown"];
    return `${name} is from ${town}`;
  });
  return retArray;
}
