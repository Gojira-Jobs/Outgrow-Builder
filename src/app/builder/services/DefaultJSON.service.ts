import {Section} from "../models/Section";
import {Item} from "../models/Item";
import {App} from "../models/App";
import {Page} from "../models/PageModel";

export class DefaultJSON {

    getJson(template: string): App {
        let app = new App("outgrow builder");

        if (template === 'Landing') {
            let landingPage = new Page(template, 'https://cdn.filestackcontent.com/0sHxFZL9T9qyI3Vf6jcO');

            let sectionHead = new Section('Logo Heading');
            let logoItem = new Item('logo');
            logoItem.imageURL = 'https://www.filestackapi.com/api/file/jJx4Amp9SjiYVGsOA1uK';
            let menu = new Item("menu");
            sectionHead.addItems(logoItem, menu);

            // content area of LANDING page
            let contentSection = new Section('Content Area');
            let header = new Item('header', `Where to build your Startup?`);
            let subHeader = new Item('sub-header', `See which emerging tech hub you should head to!`);
            let leadform = new Item('leadform', 'Let’s Find Out');
            let button = new Item('click-button', 'Get Started');
            contentSection.addItems(header, subHeader, leadform, button);
            let footerSection = new Section('Footer');
            let powered = new Item('poweredby', 'This is powered by');
            footerSection.addItems(powered);
            landingPage.addSections(sectionHead, contentSection, footerSection);

            app.addPages(landingPage);
        }
        else if (template === 'Question') {
            let QuestionPage = new Page(template, 'https://cdn.filestackcontent.com/0sHxFZL9T9qyI3Vf6jcO');
            let section1 = new Section('Your Lifestyle');

            let item1 = new Item('radio_button', 'Do you smoke?');
            item1.addFieldToCheckbox([{label: 'Never touched a cigarette', icon: ''},
                {label: 'Once in a while', icon: ''},
                {label: 'A pack a day', icon: ''}]);
            section1.addItems(item1);
            QuestionPage.addSections(section1);
            app.addPages(QuestionPage);
        }
        else if (template === 'Result') {
            let ResultPage = new Page(template, 'https://cdn.filestackcontent.com/0sHxFZL9T9qyI3Vf6jcO');

            app.addPages(ResultPage);
        }
        return app;
    }

}
