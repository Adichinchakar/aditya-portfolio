import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pagesToTest = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'Simplifai Case Study', path: '/work/simplifai' },
    { name: 'Aulys Case Study', path: '/work/aulys' },
    { name: 'Simplifai Design System', path: '/work/simplifai-design-system' }
];

test.describe('Accessibility Checks (WCAG 2.1 AA)', () => {
    for (const { name, path } of pagesToTest) {
        test(`Check ${name} page`, async ({ page }) => {
            await page.goto(path);

            // Allow time for any initial animations to settle
            await page.waitForTimeout(2000);

            const accessibilityScanResults = await new AxeBuilder({ page })
                .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
                .analyze();

            if (accessibilityScanResults.violations.length > 0) {
                console.log(`\nAccessibility Violations on ${name} (${path}):`);
                accessibilityScanResults.violations.forEach((violation, index) => {
                    console.log(`${index + 1}. [${violation.impact}] ${violation.id} - ${violation.help}`);
                    violation.nodes.forEach(node => {
                        console.log(`   - Element: ${node.html}`);
                        console.log(`   - Target: ${node.target.join(' ')}`);
                        console.log(`   - Summary: ${node.failureSummary}`);
                    });
                });
            }

            expect(accessibilityScanResults.violations).toEqual([]);
        });
    }
});
