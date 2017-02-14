import {Section} from "../models/Section";
import {Item} from "../models/Item";
import {App} from "../models/App";
import {Page} from "../models/PageModel";


export class DefaultJSON {

    getJson(template: string): App {


        let app = new App("outgrow builder");
        let landingPage = new Page("Landing",'https://res.cloudinary.com/ajitjain/image/upload/v1487051060/bg-new_vk8qjg.jpg');

        let sectionHead = new Section('Logo Heading');
        let logoItem = new Item('logo', 'https://www.filestackapi.com/api/file/jJx4Amp9SjiYVGsOA1uK');
        sectionHead.addItems(logoItem);

        // content area of LANDING page
        let contentSection = new Section('Content Area');
        let header = new Item('header', `<strong>Where to build your Startup?</strong>`);
        let subHeader = new Item('sub-header', `See which emerging tech hub you should head to!`);

        contentSection.addItems(header, subHeader);
        landingPage.addSections(sectionHead, contentSection);

        app.addPages(landingPage);

    //    console.log(JSON.stringify(app));
        return app;
    }
}