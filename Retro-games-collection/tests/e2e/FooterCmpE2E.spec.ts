import { test, expect } from '@playwright/test'

test.describe('FooterCmp', () => {
  test('renders properly', async ({ page }) => {
    await page.goto('/')
    const footer = page.locator('footer')
    await expect(footer).toBeVisible()
    await expect(page.getByRole('link', { name: 'X', exact: true })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Github', exact: true })).toBeVisible()
    await expect(page.getByRole('link', { name: 'LinkedIn', exact: true })).toBeVisible()
    await expect(page.getByRole('link', { name: 'My special place', exact: true })).toBeVisible()
  })
})
