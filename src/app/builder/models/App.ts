import {Page} from "./PageModel";

export class App {
    name: string = '';
    templateType: string = 'Numerical';
    public pages: Page[] = [];

    constructor(type?: string) {
        this.templateType = type;
    }

    public addPages(...pages: any[]) {
        for (let page in pages)
            this.pages.push(pages[page]);
    }
}