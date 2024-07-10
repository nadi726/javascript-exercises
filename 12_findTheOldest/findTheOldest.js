const findTheOldest = function(arr) {
    // This object is used inside the reduce
    // in order to avoid calculating the accumulator's
    // age at each check.
    let computedObject = {object: arr[0], age: calculateAge(arr[0])};
    
    return arr.reduce(
        (oldest, current) => {
            let ageOfCurrent = calculateAge(current);
            if (ageOfCurrent > oldest.age) {
                return {object: current, age: ageOfCurrent};
            }
            return oldest;
        },
        computedObject
    ).object
};

const calculateAge = function(person) {
    let endYear;
    if ("yearOfDeath" in person) {
        endYear = person.yearOfDeath;
    } else {
        endYear = new Date().getFullYear();
    }
    return endYear - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
