const { I } = inject();

class LoginPage {
	constructor() {
		this.inputLoginName = "[data-selenium-id='loginName']"
		this.inputLoginPass = "[data-selenium-id='loginPassword']"
		this.buttonLogin = "[data-selenium-id='loginButton']"
		this.isLoginPage = "[data-selenium-id='login']"
	}

	visit() {
		I.waitForElement(this.isLoginPage)
	}

	login(username, pass) {
		I.waitForElement(this.inputLoginName)
		I.fillField(this.inputLoginName, username)
		I.waitForElement(this.inputLoginPass)
		I.fillField(this.inputLoginPass, pass)
		I.click(this.buttonLogin)
		I.saveScreenshot("login.png")
	}

	validateLogin() {
		I.waitForElement(this.isLoginPage)
	}
}

module.exports = new LoginPage();
module.exports.LoginPage = LoginPage