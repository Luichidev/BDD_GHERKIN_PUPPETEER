const { HomePage } = require("./homePage");

const { I, homePage } = inject();

class LoginPage {
	constructor() {
		this.inputLoginName = "[data-selenium-id='loginName']"
		this.inputLoginPass = "[data-selenium-id='loginPassword']"
		this.buttonLogin = "[data-selenium-id='loginButton']"
		this.isLoginPage = "[data-selenium-id='login']"
		this.acceptCurrentCenter = "[data-selenium-id='loginSelCenterButton']"
	}

	visit() {
		I.amOnPage('/'); 
		I.waitForElement(this.isLoginPage)
	}

	login(username, pass) {
		I.waitForElement(this.inputLoginName)
		I.fillField(this.inputLoginName, username)
		I.waitForElement(this.inputLoginPass)
		I.fillField(this.inputLoginPass, pass)
		I.click(this.buttonLogin)
		I.waitForElement(this.acceptCurrentCenter)
		I.click(this.acceptCurrentCenter)
		I.saveScreenshot("login.png")
	}

	validateLogin() {
		homepage = new HomePage()
		homePage.isHomePage()
	}
}

module.exports = new LoginPage();
module.exports.LoginPage = LoginPage