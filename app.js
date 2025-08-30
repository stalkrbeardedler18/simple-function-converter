const readline = require('readline');

// Simplification function (placeholder for actual algorithm)
function simplifyFunction(func) {
    // This is a dummy simplifier. Replace with real logic.
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
