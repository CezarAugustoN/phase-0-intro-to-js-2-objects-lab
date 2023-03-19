const employee ={
    name : "Sam"
}
function updateEmployeeWithKeyAndValue (employee, name, value){
    const newEmployee ={...employee};
    newEmployee[name] = value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue (employee, name, value){
    employee[name] = value;
    return employee;
}
function deleteFromEmployeeByKey (employee, key){
    const newEmployee = {employee};
    delete newEmployee[key];
    return newEmployee;

}

function destructivelyDeleteFromEmployeeByKey (employee) {
    delete employee.name;
    return employee;
}