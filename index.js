const employee = {
    name:``,
    streetAddress:``
}

/* Below, we create a function and a new method that takes in three arguments: employee Object, a key and a value.  We use the Object.assign() method to copy our original employee object and compose an entirely new employee object, leaving the original one unmutated.  The test passes in a new key value pair (for the name key) to our new employee object and returns a new object that includes the updated value for name. */
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, { [key]: value });
}

/* The function below then mutates the employee object passed in.  After the test, we now have a new mutated employee object with a different streetAddress key value pair than our original employee object. */
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign(employee, { [key]: value });
}

/* Below, we make a function that takes two arguments: the original employee object and a key.  We declare a new variable that clones our employee object.  Then we use bracket notation to delete the name key that is passed to newEmployee by the test.  When we return the result, the cloned employee object is returned but doesn't include a name key value pair.  Sam will equal undefined. */ 
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = Object.assign({}, employee);
    delete newEmployee[key];
    return newEmployee;
}

/* This function works the same as the function above, but deletes the name key from both the original employee object as well.  This is because we have destructively mutated the original employee object. */ 
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}