import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {App} from "../models/App";

export const sectionLeadGeneration = "lead-generation";
const page_state_key = 'state';

@Injectable()
export class SavePage {

    pageChangesSubject: BehaviorSubject<App>;

    constructor() {
        this.pageChangesSubject = new BehaviorSubject(new App());
    }

    saveToLocalStore(data: string) {
        localStorage.setItem(page_state_key, data);
    }

    getFromLocalStore(): any {
        if (localStorage.getItem(page_state_key)) {
            return localStorage.getItem(page_state_key);
        }
    }

    notifyPageChanges(page: App) {
        this.pageChangesSubject.next(page);
    }

    getPageChangeObservable(): Observable<App> {
        return this.pageChangesSubject.asObservable();
    }

}
