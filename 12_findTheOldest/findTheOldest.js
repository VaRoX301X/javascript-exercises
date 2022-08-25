const findTheOldest = function(people) {
    const oldestPeople = people.sort(function(a,b) {
        const lastPerson = a.yearOfDeath - a.yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;
        if (lastPerson > nextPerson) {
          return -1;
        } else {
          return 1;
        }
    })
    return oldestPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
