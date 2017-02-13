import {Control} from "./Control";
import {Section} from "./Section";

export class Page {
    pagetype: string;
    visible: boolean = true;
    sections: Section[] = [];

    control: Control = {};

    constructor(type?: string) {
        this.pagetype = type;
    }

    //add sections to page
    public addSections(...sections: any[]) {
        for (let section in sections) {
            this.sections.push(sections[section]);
        }
    }
}
