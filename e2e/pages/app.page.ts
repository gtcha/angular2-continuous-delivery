import { browser, element, by } from 'protractor';
import { promise as wdpromise } from 'selenium-webdriver';

export class AppPage {
	private title;

	constructor() {
		this.title = element(by.css('h1')).getText();
	}

	getTitle(): wdpromise.Promise<string> {
		return this.title;
	}
}