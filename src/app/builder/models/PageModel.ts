import {Control} from "./Control";

export const MAIN_HEADING = "mainheading";
export const SUB_HEADING = "subheading";
export const INPUT_NAME = "inputname";
export const INPUT_EMAIL = "inputemail";
export const SUBMIT_BUTTON = "submitButton";
export const IMAGE_URL = "imageurl"


export class Page {
    pagetype: string;
    control: Control = {};
}
