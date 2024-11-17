const { I, loginPage } = inject();

Given(/^Access the app as admin: "([^"]*)" with password: "([^"]*)"$/, (userName, pass) => {
	loginPage.visit()
	loginPage.login(userName, pass)
});

When("The admin has logged in successfully",()=>{
	loginPage.validateLogin()
})

When("Log out",()=>{
	loginPage.logout()
})

Then("The admin has successfully logged out",()=>{
	loginPage.validateLogout()
})

Given(/^Access the app as user (.*) with (.*)$/, (userName, pass) => {
	loginPage.visit()
	loginPage.login(userName, pass)
	loginPage.validateLogin()
});