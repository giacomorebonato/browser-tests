import { Builder, By, WebDriver } from 'selenium-webdriver'
import { GooglePage } from '../pages'

describe('Google-tests', () => {
  let googlePage: GooglePage
  let driver: WebDriver

  beforeAll(async () => {
    driver = await new Builder().forBrowser('firefox').build()
    googlePage = new GooglePage(driver)
  })

  it('just executes a test on the home page', async () => {
    try {
      await googlePage.goToURL()
      await driver.findElement(googlePage.searchButton)
    } finally {
      await driver.quit()
    }
  })
})
