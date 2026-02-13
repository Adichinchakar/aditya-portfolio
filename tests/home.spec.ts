import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Aditya Chinchakar/);
});

test('experience section exists', async ({ page }) => {
    await page.goto('/');
    const experienceSection = page.getByLabel('Work Experience');
    await experienceSection.scrollIntoViewIfNeeded();
    await expect(experienceSection).toBeVisible();
    await expect(experienceSection).toContainText('Engineering Experience');
    await expect(experienceSection).toContainText('40% Increase');
});

test('hero section exists', async ({ page }) => {
    await page.goto('/');
    const heroSection = page.locator('section').first();
    await expect(heroSection).toBeVisible();
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});

test('aulys showcase exists', async ({ page }) => {
    await page.goto('/');
    // Assuming Aulys Showcase has some unique text or accessibility label
    const aulysSection = page.getByText('Aulys', { exact: false }).first();
    await aulysSection.scrollIntoViewIfNeeded();
    await expect(aulysSection).toBeVisible();
});

test('contact section exists', async ({ page }) => {
    await page.goto('/');
    const contactSection = page.locator('#contact');
    await contactSection.scrollIntoViewIfNeeded();
    await expect(contactSection).toBeVisible();
    // Verify the "Get in Touch" button is visible
    const button = page.getByRole('button', { name: 'Get in Touch' });
    await expect(button).toBeVisible();
});

test('work section exists', async ({ page }) => {
    await page.goto('/');
    const workSection = page.locator('#work');
    await workSection.scrollIntoViewIfNeeded();
    await expect(workSection).toBeVisible();
    await expect(workSection).toContainText(/Selected\s*Work/);

    // Verify at least one project card is visible
    const projectTitle = page.getByText('Infosys (EdTech AI)');
    await projectTitle.scrollIntoViewIfNeeded();
    await expect(projectTitle).toBeVisible({ timeout: 15000 });
});

test('about section exists', async ({ page }) => {
    await page.goto('/');
    const aboutSection = page.locator('#about');
    await aboutSection.scrollIntoViewIfNeeded();
    await expect(aboutSection).toBeVisible();
    await expect(aboutSection).toContainText(/Why\s*I\s*Code/);
    const designThinkingText = page.getByText('Design Thinking');
    await designThinkingText.scrollIntoViewIfNeeded();
    console.log('About section: Scrolled to Design Thinking');
    await expect(designThinkingText).toBeVisible({ timeout: 15000 });
});


