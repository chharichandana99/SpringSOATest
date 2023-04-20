import { LightningElement ,wire,api,track} from 'lwc';
import getAccounts from '@salesforce/apex/AccountHandler.returnAccounts';
export default class AccountView extends LightningElement {

    @wire (getAccounts) accounts;
}