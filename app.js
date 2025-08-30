const readline = require('readline');

// Function to simplify a given input string by removing excess whitespace
// Currently, it replaces multiple spaces with a single space and trims the resulting string.
// This is a placeholder for more advanced function simplification logic in the future.
function simplifyFunction(func) {
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