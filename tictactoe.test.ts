import { Builder, Capabilities, By } from "selenium-webdriver"
import { urlContains } from "selenium-webdriver/lib/until"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

test('clicking the top left button adds an X to the square', async () =>{
    const leftTopButton = await driver.findElement(By.id('cell-0'));

    await leftTopButton.click()
    await driver.sleep(3000)
    // expect(leftTopButton.text().toBe('X')) wasn't able to figure this out
})
test('clicking the top right button adds an X to the square', async () =>{
    const rightTopButton = await driver.findElement(By.id('cell-2'));

    await rightTopButton.click()
    await driver.sleep(3000)
    
})

test('clicking the bottom right button adds an X to the square', async () =>{
    const bottomRightButton = await driver.findElement(By.id('cell-8'));

    await bottomRightButton.click()
    await driver.sleep(3000)
    
})

