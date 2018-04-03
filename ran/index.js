const webdriver = require('selenium-webdriver')
const By = webdriver.By
const until = webdriver.until

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

const elementByText = text => driver.findElement(By.xpath("//*[contains(text(), '" + text + "')]"))
const optionByValue = text => driver.findElement(By.css("option[value='" + text + "']"))
const sendKeysToInput = (inputName, keys) => driver.findElement(By.name(inputName)).sendKeys(keys)

const findElement = (inputName) => driver.findElement(By.name(inputName))

const findElementByCSS = (inputName) => driver.findElement(By.css(inputName))

//Logueo
driver.get('https://www.alamaula.com/login.html');
//sendKeysToInput('email', 'hpferraro@hotmail.com')

sendKeysToInput('email', 'support@demosnoop.zendesk.com')

//sendKeysToInput('password', 'javauser28')

sendKeysToInput('password', 'snoop2017')
findElementByCSS('button#login-button').click()

driver.sleep(5000)

//Publicar
driver.get('https://www.alamaula.com/post.html');
elementByText('Vehículos').click()
elementByText('Autos').click()
driver.sleep(1000)
elementByText('Buenos Aires').click()
driver.sleep(1000)
elementByText('La Plata').click()
driver.sleep(1000)
optionByValue('chevrolet').click()
driver.sleep(1000)
optionByValue('agile').click()
driver.findElement(By.css('input[name]'))
sendKeysToInput('CarYear', '2008')

driver.sleep(2000)
findElementByCSS('body').click()



sendKeysToInput('CarMileageInKms', '20000')
//sendKeysToInput('Title', 'Una publicación más')
sendKeysToInput('Email', 'hpferraro@hotmail.com')



const otherFrame = driver.findElement(By.xpath("//iframe[@id='description-frame']"))
driver.switchTo().frame(otherFrame);
const body = driver.findElement(By.css("body"))
driver.executeScript("arguments[0].innerHTML = 'El auto está muy bueno, Joya, nunca taxi. 10/10 comprarían!!!'", body);

findElementByCSS('body').click()

driver.switchTo().defaultContent()



sendKeysToInput('Price', 250000)


//Envio la publicacion
findElementByCSS('button#postSubmit').click()


//driver.quit();

















