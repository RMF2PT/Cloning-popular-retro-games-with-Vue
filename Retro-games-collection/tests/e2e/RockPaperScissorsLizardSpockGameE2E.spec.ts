import { test, expect } from '@playwright/test'

test.describe('RockPaperScissorsLizardSpockGame', () => {
  test.beforeEach(async ({ page }) => {
    // Launch the app and navigate to the game page
    await page.goto('http://localhost:5173/#/playRockPaperScissorsLizardSpock')
  })

  test('should display the game title', async ({ page }) => {
    // Get the game title element
    const title = await page.locator('.game-title')
    // Assert that the title is displayed and has the correct text
    expect(await title.isVisible()).toBeTruthy()
    expect(await title.innerText()).toBe('Rock Paper Scissors Lizard Spock')
  })

  test('should allow the player to select a move', async ({ page }) => {
    // Get the option buttons
    const rockButton = await page.locator('#player-rock')
    const paperButton = await page.locator('#player-paper')
    const scissorsButton = await page.locator('#player-scissors')
    const lizardButton = await page.locator('#player-lizard')
    const spockButton = await page.locator('#player-spock')
    const playerChoice = await page.locator('#player-choice')
    // Click the rock button
    await rockButton.click()
    // Assert that the player's choice is set to rock
    expect(await playerChoice.innerText()).toContain('rock')
    // Click the paper button
    await paperButton.click()
    // Assert that the player's choice is set to paper
    expect(await playerChoice.innerText()).toContain('paper')
    // Click the scissors button
    await scissorsButton.click()
    // Assert that the player's choice is set to scissors
    expect(await playerChoice.innerText()).toContain('scissors')
    // Click the lizard button
    await lizardButton.click()
    // Assert that the player's choice is set to lizard
    expect(await playerChoice.innerText()).toContain('lizard')
    // Click the spock button
    await spockButton.click()
    // Assert that the player's choice is set to spock
    expect(await playerChoice.innerText()).toContain('spock')
  })

  test('should display the game result', async ({ page }) => {
    // Get the option buttons
    const rockButton = await page.locator('#player-rock')
    const paperButton = await page.locator('#player-paper')
    const scissorsButton = await page.locator('#player-scissors')
    const lizardButton = await page.locator('#player-lizard')
    const spockButton = await page.locator('#player-spock')
    // Click the rock button
    await rockButton.click()
    // Wait for the game result to be displayed
    await page.waitForSelector('.result-text')
    // Assert that the game result is displayed and has the correct text
    const result = await page.locator('.result-text')
    expect(await result.isVisible()).toBeTruthy()
    expect(await result.innerText()).toMatch(/(won|lost|tie)/)
    // Click the paper button
    await paperButton.click()
    // Wait for the game result to be displayed
    await page.waitForSelector('.result-text')
    // Assert that the game result is displayed and has the correct text
    expect(await result.isVisible()).toBeTruthy()
    expect(await result.innerText()).toMatch(/(won|lost|tie)/)
    // Click the scissors button
    await scissorsButton.click()
    // Wait for the game result to be displayed
    await page.waitForSelector('.result-text')
    // Assert that the game result is displayed and has the correct text
    expect(await result.isVisible()).toBeTruthy()
    expect(await result.innerText()).toMatch(/(won|lost|tie)/)
    // Click the lizard button
    await lizardButton.click()
    // Wait for the game result to be displayed
    await page.waitForSelector('.result-text')
    // Assert that the game result is displayed and has the correct text
    expect(await result.isVisible()).toBeTruthy()
    expect(await result.innerText()).toMatch(/(won|lost|tie)/)
    // Click the spock button
    await spockButton.click()
    // Wait for the game result to be displayed
    await page.waitForSelector('.result-text')
    // Assert that the game result is displayed and has the correct text
    expect(await result.isVisible()).toBeTruthy()
    expect(await result.innerText()).toMatch(/(won|lost|tie)/)
  })
})
