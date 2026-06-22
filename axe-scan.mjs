import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

const B = "http://localhost:3000";
const urls = [
  `${B}/`, `${B}/about`, `${B}/now`, `${B}/resume`, `${B}/work`, `${B}/writing`,
  `${B}/work/aulys`, `${B}/work/aulys-code`, `${B}/work/simplifai`,
  `${B}/work/simplifai-design-system`, `${B}/work/medsecure`,
  `${B}/work/nexus-banking`, `${B}/work/infosys`, `${B}/work/orbit`,
];
const browser = await chromium.launch();
const context = await browser.newContext();
for (const url of urls) {
  const page = await context.newPage();
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(url, { waitUntil: "networkidle" });
  // scroll to trigger whileInView sections, then let staggered animations settle
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 400) {
      window.scrollTo(0, y);
      await new Promise(r => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
    await new Promise(r => setTimeout(r, 1800));
  });
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();
  console.log("\n=== " + url + " ===");
  console.log("violations:", results.violations.length);
  for (const v of results.violations) {
    console.log(`  [${v.impact}] ${v.id} — ${v.help} (${v.nodes.length})`);
    for (const n of v.nodes) {
      const summary = (n.failureSummary || "").replace(/\s+/g, " ").slice(0, 140);
      console.log("      " + n.target.join(" "));
      if (v.id === "color-contrast") console.log("         » " + summary);
    }
  }
  await page.close();
}
await browser.close();
