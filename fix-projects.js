const fs = require('fs');

const pageCode = fs.readFileSync('src/data/projects.ts', 'utf8');
const domainStart = pageCode.indexOf('const DOMAIN_FILTERS');

if (domainStart !== -1) {
    let newCode = "export " + pageCode.substring(domainStart);
    newCode = newCode.replace('const PROJECTS =', 'export const PROJECTS =');
    fs.writeFileSync('src/data/projects.ts', newCode);
    console.log("Fixed projects.ts");
}
