const Person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function () {
        const fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
};

const testArgs = ['sushi', 'hiking'];

let logPersonNameAndInterests = function(...interests) {
    // Getting full name with the call of object Person
    const fullName = Person.getFullName.call(Person);
    
    // Getting string with the interests
    const interestsString = interests.join(', ');
    
    // Printing out to the console
    console.log(`${fullName} loves: ${interestsString}`);
};

logPersonNameAndInterests(...testArgs);