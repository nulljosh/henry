// Extract and test JavaScript from index.html
const fs = require('fs');

const html = fs.readFileSync('/Users/joshua/Documents/Code/henry/index.html', 'utf8');
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);

if (scriptMatch) {
    const js = scriptMatch[1];
    // Try to evaluate it
    try {
        new Function(js);
        console.log('✓ JavaScript syntax is valid');
    } catch (e) {
        console.log('✗ JavaScript syntax error:');
        console.log(e.message);

        // Try to find the line
        const lines = js.split('\n');
        if (e.stack) {
            console.log('\nStack trace:');
            console.log(e.stack);
        }
    }
} else {
    console.log('No script tag found');
}
