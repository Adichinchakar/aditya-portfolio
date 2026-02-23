const fs = require('fs');
const pdf = require('pdf-parse');
let dataBuffer = fs.readFileSync('C:\\Users\\Admin\\Desktop\\test resume\\LinkedIn profile.pdf');
pdf(dataBuffer).then(function (data) {
    console.log(data.text);
});
