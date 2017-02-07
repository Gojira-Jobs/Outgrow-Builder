import {Injectable} from "@angular/core";
import {Page} from "../models/PageModel";
import {BehaviorSubject, Observable} from "rxjs";

export const sectionLeadGeneration = "lead-generation";
const page_state_key = 'state';

@Injectable()
export class SavePage {

    pageChangesSubject: BehaviorSubject<Page>;

    constructor() {
        this.pageChangesSubject = new BehaviorSubject(new Page());
    }

    saveToLocalStore(data: string) {
        localStorage.setItem(page_state_key, data);
    }

    getFromLocalStore(): any {
        if (localStorage.getItem(page_state_key)) {
            return localStorage.getItem(page_state_key);
        }
    }

    notifyPageChanges(page: Page) {
        this.pageChangesSubject.next(page);
    }

    getPageChangeObservable(): Observable<Page> {
        return this.pageChangesSubject.asObservable();
    }

}
