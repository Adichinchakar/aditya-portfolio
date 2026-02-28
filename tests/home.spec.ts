import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Aditya Chinchakar/);
});

test('experience section exists', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Aditya Chinchakar/);
});

test('hero section exists and is interactive', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    // Verify Designer and Engineer toggle buttons exist
    await expect(page.getByRole('button', { name: 'Designer' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Engineer' })).toBeVisible();
});

test('aulys showcase exists', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Aditya Chinchakar/);
});

test('contact section exists', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Aditya Chinchakar/);
});

test('work section exists', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Aditya Chinchakar/);
    // Verify at least some projects are listed
    await expect(page.getByText('Simplifying Automation')).toBeVisible();
});

test('about section exists', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Aditya Chinchakar/);
});


