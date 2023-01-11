const user123 = ['Max', 'Moonli', 1728, 'hung', ['Irina', 'Nick'], 454, 5654, 545, 'girewq', false, true];

const types = [];

for (let i = 0; i < user123.length; i++ ) {
    // console.log(user123[i], typeof user123[i]);

    types[i] = typeof user123[i];
    // types.push(typeof user123[i]);
}

console.log(types);




const birthYears = [2000, 1945, 1994, 1503, 2001, 2010, 1985, 1947];

const agePerson = [];

for (let i = 0; i < birthYears.length; i++) {
    // agePerson[i] = 2023 - birthYears[i];
    agePerson.push(2023 - birthYears[i]);
}

console.log(agePerson);



const otherArray = [1, 2, 'green', 1842, 'solid', 91, 32, 111, 'red', 'blue'];

const arrayNumbers = [];

console.log('CONTINUE EXAMPLE');

for (let i = 0; i < otherArray.length; i++) {
    if (typeof otherArray[i] !== 'number') {
        continue;
    }

    arrayNumbers.push(otherArray[i]);
}

console.log('BREAK EXAMPLE');

for (let i = 0; i < otherArray.length; i++) {
    if (typeof otherArray[i] === 'string') {
        break;
    }

    arrayNumbers.push(otherArray[i]);
}

console.log(arrayNumbers);