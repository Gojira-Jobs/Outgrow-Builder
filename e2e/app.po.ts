import {browser, element, by} from "protractor";

export class OutgrowBuilderPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('jsonTemplate-root h1')).getText();
  }
}
