import {Page} from "./PageModel";

export class App {
    _id: string = '';
	company: String = '';
	name: string = '';
	templateType: string = 'Numerical';
	title: string = 'Outgrow';
	spredsheetUrl: string = '';
	ga: string = '';
	favicon: string = '';
	description: string = 'Default Meta Description';
	public: boolean = true;
	visible: boolean = true;
	poweredby: boolean = true;
	realTime: boolean = false;
	rdealTimeHeading: string = 'Result Heading goes here';
	themeColor: string = 'cp1';
	theme: any = {};
	cta: any = {
		shareType: 'cta',
		shareButtonName: '',
		shareTitle: '',
		facebookUrl: 'http://www.facebook.com/outgrowco',
		twitterUrl: 'outgrowco'
	};
	customColor: any = {};
	template: string = '';
	formula: any = [];
	url: any = '';
	navigate_Url: any = 'https://outgrow.co';
	mode: string = 'PRIVATE';
	status: string = 'DEV';
	changed: boolean = true;
	liveApp: string = '';
	embedTitle: string = 'Get Started';
	embedBgColor: string = '#fb545b';
	embedTextColor: string = '#ffffff';
	embedLinkColor: string = '#fb545b';
	seoImage: string = '';
	public pages: Page[] = [];

    constructor(type?: string) {
        this.templateType = type;
    }

    public addPages(...pages: any[]) {
        for (let page in pages)
            this.pages.push(pages[page]);
    }
}