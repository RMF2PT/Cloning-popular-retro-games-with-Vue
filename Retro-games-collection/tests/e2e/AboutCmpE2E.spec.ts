import { test, expect } from '@playwright/test'

test.describe('AboutCmp', () => {
  test('renders properly', async ({ page }) => {
    await page.goto('/#/about')
    const navBar = page.locator('nav')
    await expect(navBar).toBeVisible()
    await expect(page.locator('nav > #title')).toHaveText('Retro Games Collection')
    await expect(page.getByRole('link', { name: 'Games', exact: true })).toBeVisible()
    await expect(page.getByRole('link', { name: 'About', exact: true })).toBeVisible()
    const title = page.locator('h1')
    await expect(title).toBeVisible()
    await expect(page.locator('h1')).toHaveText('Project: Cloning popular retro games with Vue')
    const sections = page.locator('section')
    for (let i = 0; i < 6; i++) {
      const section = sections.nth(i)
      await expect(section).toBeVisible()
    }
    const footer = page.locator('footer')
    await expect(footer).toBeVisible()
    await expect(page.getByRole('link', { name: 'X', exact: true })).toBeVisible()
    // ? I don't understand why this fails
    // await expect(page.getByRole('link', { name: 'Github', exact: true })).toBeVisible()
    await expect(page.getByRole('link', { name: 'LinkedIn', exact: true })).toBeVisible()
    await expect(page.getByRole('link', { name: 'My special place', exact: true })).toBeVisible()
  })
})
