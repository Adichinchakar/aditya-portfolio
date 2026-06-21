const fs = require('fs');
const lines = fs.readFileSync('C:/Users/Admin/.gemini/antigravity/brain/cfe7dc55-b5ac-4b56-a8d5-947b73aeb9cb/.system_generated/logs/transcript.jsonl', 'utf8').split('\n');

for (const line of lines) {
    if (line.includes('write_to_file') && line.includes('aulys-ui.tsx')) {
        try {
            const obj = JSON.parse(line);
            if (obj.tool_calls) {
                for (const call of obj.tool_calls) {
                    if (call.name === 'write_to_file' && call.args.TargetFile.includes('aulys-ui.tsx')) {
                        fs.writeFileSync('c:/Users/Admin/Desktop/Portfolio Website/src/components/case-studies/aulys/aulys-ui.tsx', call.args.CodeContent);
                        console.log('Recovered!');
                    }
                }
            }
        } catch(e) {}
    }
}
