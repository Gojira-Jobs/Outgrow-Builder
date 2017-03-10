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
            logoItem.imageURL = 'https://www.filestackapi.com/api/file/lEX2H5eTeU1rPkNa4fWw';
            let menu = new Item("menu");
            sectionHead.addItems(logoItem, menu);

            // content area of LANDING page
            let contentSection = new Section('Content Area');
            let header = new Item('header', `Where to build your Startup?`, "main-head");
            let subHeader = new Item('sub-header', `See which emerging tech hub you should head to!`,'sub-head');
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

            let sectionHead1 = new Section('Logo Heading');
            let menu = new Item("menu");
            sectionHead1.addItems( menu);

            let section1 = new Section('Your Lifestyle');
            let item1 = new Item('radio_button', 'Do you smoke?');
            item1.addFieldToCheckbox([{label: 'Never touched a cigarette', icon: ''},
                {label: 'Once in a while', icon: ''},
                {label: 'A pack a day', icon: ''}]);
            section1.addItems(item1);
            QuestionPage.addSections(sectionHead1, section1);
            app.addPages(QuestionPage);
        }
        else if (template === 'Result') {
            let resultPage = new Page(template, 'https://cdn.filestackcontent.com/0sHxFZL9T9qyI3Vf6jcO');

            //header section
            let headerSection = new Section("heading");
            headerSection.addItems(new Item("header",
                `YOUR HEADING GOES HERE`, "result-head"));

            // result section
            let resultSection1 = new Section("Result1",'result-inn');
            let resultOutput1 = new Item('result_output', `{R1}`);
            let resultHeader = new Item('sub-header', 'FOR TOP NOTCH HDTV QUALITY','result-heading');
            let resultContent = new Item('sub-header',
                'Using the same camera and crew that shot Gravity and Avtar!','result-desc');
                
            let button = new Item('click-button', 'Build Similar Calculator');
            resultSection1.addItems(resultOutput1, resultHeader, resultContent,button);
            resultPage.addSections(headerSection, resultSection1);
            app.addPages(resultPage);
        }
        else if(template == 'MediaForms' || template == 'MediaVideos' || template == 'MediaGraphs'){
            let name;
            (template=='MediaForms' || template=='MediaVideos')?name='load_frame':name='load_graph';
            let mediaPage = new Page("MediaContents", 'https://cdn.filestackcontent.com/0sHxFZL9T9qyI3Vf6jcO');
            let mediaSection= new Section(template,"media-page");
            let item1=new Item(name);
            mediaSection.addItems(item1);
            mediaPage.addSections(mediaSection);
            app.addPages(mediaPage);
        }
        return app;
    }

    private createResultSection(): Section {
        let resultSection = new Section("Result1");
        let resultOutput = new Item('result_output', `{R1}`);
        let resultHeader = new Item('sub-header', 'FOR TOP NOTCH HDTV QUALITY');
        let resultContent = new Item('sub-header',
            'Using the same camera and crew that shot Gravity and Avtar!');
        resultSection.addItems(resultOutput, resultHeader, resultContent);
        return resultSection;
    }

}
