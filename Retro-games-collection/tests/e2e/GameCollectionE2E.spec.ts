import { test, expect } from '@playwright/test'

test.describe('GameCollection', () => {
  test('renders properly', async ({ page }) => {
    await page.goto('/#/games')
    const navBar = page.locator('nav')
    await expect(navBar).toBeVisible()
    await expect(page.locator('nav > #title')).toHaveText('Retro Games Collection')
    await expect(page.locator('h1')).toHaveText('Games Collection')
    const cards = page.locator('.card')
    for (let i = 0; i < 3; i++) {
      const card = cards.nth(i)
      await expect(card).toBeVisible()
    }
  })

  test('navigates to game details page when a game card is clicked', async ({ page }) => {
    await page.goto('/#/games')
    const gameLink = await page.waitForSelector('.game-link')
    await gameLink.click()
    await expect(page.locator('h1')).toHaveText('Tetris')
  })
})
