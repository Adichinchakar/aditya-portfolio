import fs from 'fs';

const jds = [
  {
    title: "Founding Product Designer - AI Startup",
    expectedMatch: "High",
    jd: "We are a seed-stage AI startup looking for a Founding Designer to own our 0->1 product journey. You must have experience designing complex SaaS products, understanding AI capabilities, and ideally have coding/frontend knowledge to prototype ideas. 5+ years experience required."
  },
  {
    title: "Staff Product Designer - Enterprise SaaS",
    expectedMatch: "High",
    jd: "Looking for a Staff Product Designer to lead our enterprise platform redesign. You will define the UX vision, build and scale our design system, and work across 4-5 product squads. 8+ years of enterprise/B2B experience required. Previous agency or consulting experience (like Infosys) is a plus."
  },
  {
    title: "Lead UI/UX Designer - Design Systems",
    expectedMatch: "High",
    jd: "We need a Lead Designer to take ownership of our global design system. You will architect tokens, components, and documentation. You must have experience scaling design systems across multiple teams and proving ROI through faster dev cycles."
  },
  {
    title: "Senior UX Designer - AI Tools",
    expectedMatch: "High",
    jd: "Join our team building AI-assisted developer tools. You will design complex interfaces, requiring deep systems thinking. Experience with AI/ML UX patterns and strong technical literacy is required."
  },
  {
    title: "Product Designer - eCommerce/B2C",
    expectedMatch: "Medium",
    jd: "We are looking for a Product Designer for our consumer eCommerce app. Must have 5+ years of B2C mobile app experience, focusing on checkout conversions, cart optimization, and consumer psychology."
  },
  {
    title: "Frontend Developer (UX Focus)",
    expectedMatch: "Medium",
    jd: "We need a React/Next.js developer who has an eye for design. You will implement UI components and help bridge the gap between design and engineering. Strong Typescript and CSS skills required."
  },
  {
    title: "Junior UI Designer",
    expectedMatch: "Low",
    jd: "Entry-level position for a recent graduate. You will assist senior designers with icon creation, exporting assets, and organizing Figma files. 0-2 years experience."
  },
  {
    title: "Hardware Product Manager",
    expectedMatch: "Low",
    jd: "Looking for a PM to lead our new IoT consumer device. Must have experience managing physical supply chains, hardware manufacturing, and embedded software teams."
  },
  {
    title: "Senior 3D Game Designer",
    expectedMatch: "Low",
    jd: "Join our AAA studio. Must have 7+ years experience in level design, Unreal Engine 5, 3D modeling, and multiplayer game economies."
  },
  {
    title: "Brand & Marketing Designer",
    expectedMatch: "Low",
    jd: "Looking for a visual designer to own our social media assets, marketing landing pages, and conference booths. Heavy focus on illustration, typography, and brand identity."
  }
];

async function runTest() {
  const results = [];
  for (const job of jds) {
    console.log(`Testing: ${job.title}...`);
    try {
      const response = await fetch('http://localhost:3000/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jdText: job.jd })
      });
      
      const text = await response.text();
      const lines = text.split('\n');
      let finalResult = null;
      for (const line of lines) {
        if (line.startsWith('data: ')) {
          try {
            const data = JSON.parse(line.slice(6));
            if (data.type === 'result') {
              finalResult = data.data;
            }
          } catch(e){}
        }
      }
      
      if (finalResult) {
        results.push({
          title: job.title,
          expected: job.expectedMatch,
          score: finalResult.match_score,
          justification: finalResult.justification
        });
        console.log(`Score: ${finalResult.match_score} (Expected: ${job.expectedMatch})`);
      } else {
        console.log(`Failed to parse final result for ${job.title}. Raw response:`, text);
      }
    } catch (e) {
      console.log(`Error testing ${job.title}: ${e.message}`);
    }
  }
  
  fs.writeFileSync('c:/Users/Admin/Desktop/Portfolio Website/test_results.json', JSON.stringify(results, null, 2));
  console.log('Test complete. Results saved to test_results.json');
}

runTest();
