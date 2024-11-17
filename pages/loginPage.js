const { HomePage } = require("./homePage");

const { I, homePage } = inject();

class LoginPage {
	constructor() {
		this.inputLoginName = "[data-selenium-id='loginName']"
		this.inputLoginPass = "[data-selenium-id='loginPassword']"
		this.buttonLogin = "[data-selenium-id='loginButton']"
		this.isLoginPage = "[data-selenium-id='login']"
		this.acceptCurrentCenter = "[data-selenium-id='loginSelCenterButton']"
		this.detailAccountButton = "[data-selenium-id='mainUserButton']"
		this.logoutButton = "[data-selenium-id='mainLogoutButton']"
		this.acceptLogoutButton = "[data-selenium-id='button-yes-msgConfirm37']"
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

	logout()
	{
		I.waitForElement(this.detailAccountButton)
		I.click(this.detailAccountButton)
		I.waitForElement(this.logoutButton)
		I.click(this.logoutButton)
		I.waitForElement(this.acceptLogoutButton)
		I.click(this.acceptLogoutButton)
	}

	validateLogin() {
		homepage = new HomePage()
		homePage.isHomePage()
	}

	validateLogout(){
		I.waitForElement(this.isLoginPage)
	}
}

module.exports = new LoginPage();
module.exports.LoginPage = LoginPage