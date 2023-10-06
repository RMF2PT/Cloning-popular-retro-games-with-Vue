import { test, expect } from '@playwright/test'

// See here how to get started:
// https://playwright.dev/docs/intro
test('visits the app root url', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('This is first paragraph')).toBeVisible()
  await expect(page.locator('div.greetings > h1')).toHaveText('Hello Again')
  await page.getByRole('button').click()
  await expect(page.getByText('User is 28 years old.')).toBeVisible()
  await page.getByRole('button').click()
  await expect(page.getByText('Secret message!')).toBeVisible()
})
