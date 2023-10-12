import { test, expect } from '@playwright/test'

test.describe('Tic Tac Toe Game E2E Tests', () => {
  let page: any

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage()
    await page.goto('http://localhost:5173/#/playTicTacToe')
  })

  test.afterEach(async () => {
    await page.close()
  })

  test('should display the Tic Tac Toe game board', async () => {
    const gameBoard = await page.waitForSelector('#game-board')
    expect(gameBoard).toBeTruthy()
  })

  test('should display the Tic Tac Toe game status', async () => {
    const gameInfo = await page.waitForSelector('.game-info')
    expect(gameInfo).toBeTruthy()
  })

  test('should allow player to choose cell on the game board', async () => {
    const gameBoard = await page.waitForSelector('#game-board')
    const cells = await gameBoard.$$('.game-cell')
    expect(cells.length).toBe(9)
    const startButton = await page.waitForSelector('#start-button')
    await startButton.click()
    await cells[0].click()
    const cell1 = page.locator('#cell-1')
    await expect(cell1).toHaveText('X')
  })

  test('should display the winner', async () => {
    const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

    const gameBoard = await page.waitForSelector('#game-board')
    const cells = await gameBoard.$$('.game-cell')
    expect(cells.length).toBe(9)
    const startButton = await page.waitForSelector('#start-button')
    await startButton.click()
    await cells[0].click()
    const cell1 = page.locator('#cell-1')
    await expect(cell1).toHaveText('X')

    await delay(2000)
    await cells[1].click()
    const cell2 = page.locator('#cell-2')
    await expect(cell2).toHaveText('X')

    await delay(2000)
    await cells[2].click()
    const cell3 = page.locator('#cell-3')
    await expect(cell3).toHaveText('X')

    // ! this test will fail if computer chooses cell 2 or 3 before player chooses one of them
    const endGameMessage = page.locator('.end-game-message')
    await expect(endGameMessage).toHaveText('Game over and the winner is you')
  })
})
