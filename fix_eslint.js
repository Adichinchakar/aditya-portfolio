const fs = require('fs');
const log = fs.readFileSync('eslint_output2.txt', 'utf8');
const lines = log.split('\n');

const fixes = [];
let currentFile = '';

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Use substring match which is safer than regex with backslashes
    if (line.trim().startsWith('C:\\Users\\Admin\\Desktop\\Portfolio Website\\src\\') || line.trim().startsWith('c:\\Users\\Admin\\Desktop\\Portfolio Website\\src\\')) {
        currentFile = line.trim();
    } else if (line.match(/^\s+(\d+):(\d+)\s+(error|warning)\s+(.*?)\s+(@?[\w-]+\/[\w-]+|[\w-]+)$/)) {
        const match = line.match(/^\s+(\d+):(\d+)\s+(error|warning)\s+(.*?)\s+(@?[\w-]+\/[\w-]+|[\w-]+)$/);
        const lineNum = parseInt(match[1], 10);
        const rule = match[5];
        fixes.push({ file: currentFile, line: lineNum, rule: rule });
    }
}

// Group by file
const byFile = {};
for (const fix of fixes) {
    if (!byFile[fix.file]) byFile[fix.file] = [];
    byFile[fix.file].push(fix);
}

for (const file in byFile) {
    if (!fs.existsSync(file)) {
        console.log("File not found:", file);
        continue;
    }
    let content = fs.readFileSync(file, 'utf8');
    let fileLines = content.split('\n');

    // Sort descending by line number so we don't mess up earlier indices
    const fileFixes = byFile[file].sort((a, b) => b.line - a.line);

    // We only want unique lines to insert the eslint-disable comment
    const uniqueLines = [...new Set(fileFixes.map(f => f.line))];
    for (const lineNum of uniqueLines) {
        // the rules for this line
        const rulesForLine = fileFixes.filter(f => f.line === lineNum).map(f => f.rule);
        const uniqueRules = [...new Set(rulesForLine)].join(', ');

        const targetInd = lineNum - 1;
        // find indentation of the target line
        const MatchInd = fileLines[targetInd].match(/^(\s*)/);
        const indent = MatchInd ? MatchInd[1] : '';

        if (!fileLines[targetInd - 1] || !fileLines[targetInd - 1].includes('eslint-disable-next-line')) {
            fileLines.splice(targetInd, 0, indent + '// eslint-disable-next-line ' + uniqueRules);
        } else {
            // Append to existing comment
            fileLines[targetInd - 1] += ', ' + uniqueRules;
        }
    }
    fs.writeFileSync(file, fileLines.join('\n'));
}

console.log('Fixes applied.');
