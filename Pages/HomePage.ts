import {t,Selector} from 'testcafe';

export default class HomePage {

    public accountIcon:Selector;
    public myAccountLink:Selector;
    constructor(){
        this.accountIcon = Selector('[type="accountUnfilled"]');
        this.myAccountLink = Selector('[data-testid="myaccount-link"]');
    }

}