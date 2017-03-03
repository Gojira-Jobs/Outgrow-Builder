import {Injectable} from "@angular/core";
import {Observable, ReplaySubject} from "rxjs";
@Injectable()
export class Emitter {

    private _emitters: ReplaySubject<any> = new ReplaySubject(2);

    getAsObservables(): Observable<any> {
        return this._emitters.asObservable();
    }

    notifyChanges(ID) {
        this._emitters.next(ID);
    }


}