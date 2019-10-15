import 'testcafe';
import HomePage from '../Pages/HomePage';
import LoginPage from  '../Pages/LoginPage';

const homePage = new HomePage();
const loginPage = new LoginPage();

fixture(`Feature : test home page`).page('https://www.asos.com');

test('Should login', async t => {

    await t.click(homePage.accountIcon)
    .hover(homePage.myAccountLink)
    .click(homePage.myAccountLink);

    t.expect(loginPage.submit.visible).eql(true);

    await loginPage.DoLogin('test','test');
});
