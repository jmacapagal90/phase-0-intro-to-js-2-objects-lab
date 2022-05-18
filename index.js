const employee = {
    name: "Matt Murdock",
    streetAddress: "49th and 11th"
}

function updateEmployeeWithKeyAndValue(employee,key,value){
     const newEmployee = {
         ...employee,
        name: "Sam",
        streetAddress: "11 Broadway"
    }
     return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee.name = "Sam",
    employee.streetAddress = "12 Broadway"
    return employee
}

function deleteFromEmployeeByKey(employee,key){
    const employee2 = {
        ...employee,
    }
    delete employee2.name
    return employee2
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee.name
    return employee
}