import { WebDriver } from 'selenium-webdriver'

class BasePage {
  driver: WebDriver

  constructor(driver: WebDriver) {
    this.driver = driver
  }
}

export { BasePage }
