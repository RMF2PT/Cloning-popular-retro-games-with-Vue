import { test, expect } from '@playwright/test'

test.describe('NotFound', () => {
  test('renders properly', async ({ page }) => {
    await page.goto('/#/notfound')
    const message = page.locator('h1')
    await expect(message).toBeVisible()
    await expect(message).toHaveText('404 - Page not found')
    const button = page.locator('button')
    await expect(button).toBeVisible()
    await expect(button).toHaveText('Go back')
  })
})
