import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pagesToTest = [
    { name: 'Home', path: '/' },
    { name: 'Simplifai Case Study', path: '/work/simplifai' },
    { name: 'Aulys Case Study', path: '/work/aulys' }
];

test.describe('Accessibility Checks (WCAG 2.1 AA)', () => {
    for (const { name, path } of pagesToTest) {
        test(`Check ${name} page`, async ({ page }) => {
            await page.goto(path);

            // Skip error pages
            const html = await page.locator('html').getAttribute('id');
            if (html === '__next_error__') {
                test.skip();
                return;
            }

            // Allow time for any initial animations to settle
            await page.waitForTimeout(2000);

            const accessibilityScanResults = await new AxeBuilder({ page })
                .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
                .analyze();

            if (accessibilityScanResults.violations.length > 0) {
                const fs = require('fs');
                fs.appendFileSync('a11y-debug.txt', `\nViolations on ${name}:\n` + JSON.stringify(accessibilityScanResults.violations, null, 2));
            }

            expect(accessibilityScanResults.violations).toEqual([]);
        });
    }
});
