import { test, expect } from '@playwright/test'

test.describe('HomeCmp', () => {
  test('renders properly', async ({ page }) => {
    await page.goto('/')
    const title = page.locator('h1')
    await expect(title).toBeVisible()
    await expect(page.locator('h1')).toHaveText('Welcome to my personal project')
    expect(
      page.getByText(
        'This is my playground for cloning classic retro games and training my developer skills'
      )
    ).toBeVisible()
    expect(page.getByText('Check out all the games available here')).toBeVisible()
  })
})
