const fs = require('fs');
const filePath = 'f:/PROJECT CODING/HASIL GABUT/MathFlow/script.js';
let content = fs.readFileSync(filePath, 'utf8');
let lines = content.split('\n');

// Find the problematic lines precisely by content searching instead of index
// to avoid issues if indices shifted.
let newLines = lines.filter(line => {
    return !line.includes("Domain dari f(x) =") &&
        !line.includes("Jika f(x) = x² + 1, maka f(f(1)) = ?");
});

// Also fix the structural tags after line 918
// We know from view_file that line 918 is "                ]" and line 919 is "            }," after my previous partial fix.
// Wait, actually let's just do a clean regex replacement on the whole content.
let cleanedContent = content.replace(/                \]\s+\]\s+\},/g, '                ]\n            },');
// That might be too broad.

// Let's stick to the filter for now and then manually fix any leftover brackets.
fs.writeFileSync(filePath, newLines.join('\n'));
console.log('Fixed script.js');
