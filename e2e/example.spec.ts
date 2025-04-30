import { test, expect } from '@playwright/test';
import { getByRole } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';

// Add Testing Library matchers to Playwright's expect
declare global {
  namespace PlaywrightTest {
    interface Matchers<R> extends TestingLibraryMatchers<typeof expect.stringContaining, R> { }
  }
}

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/features');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Show of Hands');
});


test('test dashboard', async ({ page }) => {
  await page.goto('http://localhost:5173/admin/dashboard');

  const heading = getByRole('heading', { name: 'All Forms' });

  // Expect a title "to contain" a substring.
  await expect(heading).toBeInTheDocument();
});