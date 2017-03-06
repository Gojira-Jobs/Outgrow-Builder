import {Section} from "./Section";

export class Page {
    pagetype: string;
    _id: string = '';
    description: string = '';
    defaultClass: string = '';
    bgImage: string = '';
    bgImageVisible: boolean = true;
    bgColor: string = '';
    type: string = '';
    visible: boolean = true;
    sections: Section[] = [];

    constructor(type?: string, bgImage?: string) {
        this._id = type + Math.floor(Math.random() * (100 - 2 + 1)) + 2;
        this.pagetype = type;
        this.bgImage = bgImage;
    }

    //add sections to page
    public addSections(...sections: any[]) {
        for (let section in sections) {
            this.sections.push(sections[section]);
        }
    }
}
