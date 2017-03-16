import { CallbackStepDefinition } from 'cucumber';
import { browser, element, by } from 'protractor';
import { binding, given, then, when } from 'cucumber-tsflow';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

import {AppPage} from '../pages/app.page';

@binding()
class NewTeamieSteps {

    private appPage = new AppPage();
    @given(/^I am on start page$/)
    public GivenIDontEnterATeamNameForMyTeam (callback:CallbackStepDefinition): void {
        expect(browser.getTitle()).to.eventually.equal('Angular QuickStart').and.notify(callback);
    }

    @then(/^"([^"]*)" should be the title$/)
    public GivenEnterATeamNameForMyTeam (title: string, callback:CallbackStepDefinition): void {
         expect(this.appPage.getTitle()).to.eventually.equal(title).and.notify(callback);
    }    
}

export = NewTeamieSteps; 