import {t,Selector} from 'testcafe';

export default class LoginPage {

    public emailField:Selector;
    public passwordField:Selector;
    public submit:Selector;

    constructor(){
        this.emailField = Selector('[data-st-field="id-signIn-emailAddress"]');
        this.passwordField = Selector('[data-st-field="id-signIn-password"]');
        this.submit = Selector('[[value="Sign in"]]');
    }

   async DoLogin(user:string,password:string) {
    await  t.typeText(this.emailField,user)
        .typeText(this.passwordField, password)
        .click(this.submit);
    }

}