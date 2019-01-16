import { BasePage } from './BasePage'
import { By } from 'selenium-webdriver'

class GooglePage extends BasePage {
  url = 'http://www.google.com'

  searchButton = By.css('input[value="Google Search"]')

  async goToURL() {
    await this.driver.get(this.url)
  }
}

export { GooglePage }
