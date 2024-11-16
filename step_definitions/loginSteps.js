const { I, loginPage } = inject();

Given(/^Access the app as admin: "([^"]*)" with password: "([^"]*)"$/, (userName, pass) => {
	loginPage.visit()
	loginPage.login(userName, pass)
});


/*
When('The admin has logged in successfully', () => {});
And('Log out', () => {});
Then('The admin has successfully logged out', () => {});
*/