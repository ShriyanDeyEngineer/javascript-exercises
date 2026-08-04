const findTheOldest = function(people) {
    //First store the age of each person, then sort from oldest to youngest or vise versa
    //Although new arrays are created with methods such as .map() create a new array, they can still be used to
    //alter an original array of objects by doing things such as assigning a new property/attribute/key to each element (which is an object)
    //because when you assign a variable to an object, you store a reference to it, not a copy of the object

    people.map(person => {
        if(!("yearOfDeath" in person))
        {
            let date = new Date();
            let currentYear = date.getFullYear();

            let currentAge = currentYear - person.yearOfBirth;
            return person.age = currentAge;
        }
        else{return person.age = person.yearOfDeath - person.yearOfBirth;}
    });
    
    people.sort((person1, person2) => {
        return person1.age > person2.age ? -1 : 1;
    });
    
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
