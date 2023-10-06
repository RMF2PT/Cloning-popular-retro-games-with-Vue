import { test, expect } from '@playwright/test'

test.describe('NavBar', () => {
  test('renders properly', async ({ page }) => {
    await page.goto('/')
    const navBar = page.locator('nav')
    await expect(navBar).toBeVisible()
    await expect(page.locator('nav > #title')).toHaveText('Retro Games Collection')
    await expect(page.getByRole('link', { name: 'Games', exact: true })).toBeVisible()
    await expect(page.getByRole('link', { name: 'About', exact: true })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Contact', exact: true })).toBeVisible()
  })
})
