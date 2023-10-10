import { test, expect } from '@playwright/test'

test.describe('Tetris Game E2E', () => {
  test('loads Tetris game when user presses "Play Game" in GameDetails component', async ({
    page
  }) => {
    // Navigate to the Retro Games Collection homepage
    await page.goto('http://localhost:5173/#/games')

    // Click on the first game in the list to go to its details page
    const gameLink = await page.getByRole('link', { name: 'Tetris Tetris' })
    await gameLink.click()

    // Click on the "Play Game" button to start the game
    const playGameButton = await page.waitForSelector('.play-game-button')
    await playGameButton.click()

    // Wait for the game to load
    await page.waitForSelector('.game-canvas')

    // Assert that the game is loaded by checking for the presence of the game canvas
    const gameCanvas = await page.$('.game-canvas')
    expect(gameCanvas).toBeTruthy()

    // Assert that the score, highscore, and level are present
    const score = await page.$('#score')
    expect(score).toBeTruthy()
    const highscore = await page.$('#highscore')
    expect(highscore).toBeTruthy()
    const level = await page.$('#level')
    expect(level).toBeTruthy()

    // Assert that the next piece container is present
    const nextPieceContainer = await page.$('#next-piece-container')
    expect(nextPieceContainer).toBeTruthy()

    // Assert that the play button is not present
    const playButton = await page.$('.play-game-button')
    expect(playButton).toBeFalsy()

    // Assert that the start button is present
    const startButton = await page.$('#start-button')
    expect(startButton).toBeTruthy()
  })
})
