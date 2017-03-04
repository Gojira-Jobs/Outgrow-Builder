import {Injectable} from "@angular/core";
import {Observable, ReplaySubject} from "rxjs";

@Injectable()
export class Emitter {

    private replaySubject: ReplaySubject<any> = new ReplaySubject(2);

    getAsObservables(): Observable<any> {
        return this.replaySubject.asObservable();
    }

    notifyChanges(ID) {
        this.replaySubject.next(ID);
    }
}