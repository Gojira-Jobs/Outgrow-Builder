import {Injectable} from "@angular/core";
import {EmitterStore} from "./emitter.store";
import {EventEmitter} from '@angular/core';
import {BehaviorSubject,Observable,ReplaySubject} from 'rxjs';
@Injectable()
export class Emitter {
       // [name: string]: any;
       // emitters: any;
    // private static emitters:{ [ID: string]: EventEmitter<any> }={};
    // constructor(){
    //     EmitterStore.forEach((emitter:any)=>{
    //         Emitter.emitters[emitter.ID]=emitter.value;
    //     })
    // }
    //  static get(ID:string):EventEmitter<any>{
    //     return this.emitters[ID];
    // } 
      private _emitters: ReplaySubject<any> = new ReplaySubject(2);
    // Set a new event in the store with a given ID
    // as key
     get(): Observable<any> {
        return this._emitters.asObservable();
    }

    notifyChanges(ID) {
        console.log("done dana dan");
            this._emitters.next(ID);
    }


}