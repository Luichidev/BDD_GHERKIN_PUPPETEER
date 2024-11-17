const { I } = inject();

class HomePage {
	constructor() {
		this.isHomePage = "[data-selenium-id='app-menu-buttons']"
	}

	isHomePage(){
		I.see(this.isHomePage)
	}
}

module.exports = new HomePage();
module.exports.HomePage = HomePage