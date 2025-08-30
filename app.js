const readline = require('readline');

// Function to simplify a given input string by removing excess whitespace
function simplifyFunction(func) {
    // This is a dummy simplifier. Replace this with a real logic to simplify functions.
    return func.replace(/\s+/g, ' ').trim();
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a complex function: ', (inputFunction) => {
    const simplifiedFunction = simplifyFunction(inputFunction);
    console.log(`Original Function: ${inputFunction}`);
    console.log(`Simplified Function: ${simplifiedFunction}`);
    rl.close();
});