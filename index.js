// Code your solution in this file.

function lowerCaseDrivers(collection)
{
  return collection.map(function(driver)
  {
    return driver.toLowerCase();
  });
}

function nameToAttributes(collection)
{
  return collection.map(function(driver)
  {
    let split = driver.split(' ');
    let output = {};
    output['firstName'] = split[0];
    output['lastName'] = split[1];
    return output;
  });
}

function attributesToPhrase(collection)
{
  return collection.map(function(driver)
  {
    let output = `${driver.name} is from ${driver.hometown}`;
    return output

  });
}
