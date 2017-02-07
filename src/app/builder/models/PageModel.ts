import {Control} from "./Control";

export const MAIN_HEADING = "mainheading";
export const SUB_HEADING = "subheading";
export const INPUT_NAME = "inputname";
export const INPUT_EMAIL = "inputemail";
export const SUBMIT_BUTTON = "submitButton";


export class Page {
    pagetype: string;
    control: Control = {};
}
