import { CallbackStepDefinition } from 'cucumber';
import { binding, given, then, when } from 'cucumber-tsflow';

import {Actor} from 'serenity-js/lib/screenplay';
import { BrowseTheWeb } from 'serenity-js/lib/screenplay-protractor';

import { protractor } from 'protractor';

import {Start} from '../screenplay/tasks/Start.task';
import {Waiting} from '../screenplay/tasks/waiting.task'


@binding()
class  testAStep {

    actor: Actor;

    @given(/^"([^"]*)" am on first page$/)
    public GivenIDontEnterATeamNameForMyTeam (name: string,callback:CallbackStepDefinition): void {
        this.actor = Actor.named(name).whoCan(BrowseTheWeb.using(protractor.browser));

        this.actor.attemptsTo(
            Start.onFirstPage()
        );
        callback();
    }

    @when(/^"([^"]*)" still on first page$/)
    public GivenIDontEnterATeamNameForMyTeam1 (name: string,callback:CallbackStepDefinition): void {
        this.actor.attemptsTo(
            Waiting.onFirstPage()
        );
        callback();
    }

    @then(/^"([^"]*)" should visible as the title$/)
    public GivenIDontEnterATeamNameForMyTeam2 (title: string,callback:CallbackStepDefinition): void {
        callback(null, 'pending');
    }


    // this.Given(/^.* am on first page$/, function (name: string, callback: CallbackStepDefinition) {
    //     actor = Actor.named(name).whoCan(BrowseTheWeb.using(protractor.browser));

    //     actor.attemptsTo(
    //         Start.onFirstPage()
    //     );
    //     callback();
    // });

    // this.When(/^.* still on first page$/, function (name: string) {
    //     actor.attemptsTo(
    //         Waiting.onFirstPage()
    //     );
    // });

    // this.Then(/^.* should visible as the title$/, function (title: string, callback: CallbackStepDefinition) {
    //     callback(null, 'pending');
    // });
};