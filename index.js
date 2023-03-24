// Write your solution in this file!
// Define an object called employee with two properties
const employee = {
  name : 'Sam',
  streetAddress : '12 Broadway',
};

// Returns a new employee object with the original properties and the new key-value pair
function updateEmployeeWithKeyAndValue(employee, key, value){
  // Create a new object by copying the original employee object using the spread operator
  let newEmployee = { ...employee };
  // Add or update a key-value pair to the new object
  newEmployee[key] = value;
  // Return the new employee object
  return newEmployee;
}

// Modifies the original employee object and returns it
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  // Update the original employee object with the new key-value pair
  employee[key] = value;
  // Return the modified original employee object
  return employee;
}

// Deletes the key property from a clone of the employee object and returns the new employee object
function deleteFromEmployeeByKey(employee, key){
  // Create a new object by copying the original employee object using the spread operator
  let newEmployee = { ...employee };
  // Delete the key-value pair from the new object
  delete newEmployee[key];
  // Return the new employee object
  return newEmployee;
}

// Deletes the key property from the original employee object and returns it
function destructivelyDeleteFromEmployeeByKey(employee, key){
  // Delete the key-value pair from the original employee object
  delete employee[key];
  // Return the modified original employee object
  return employee;
}
