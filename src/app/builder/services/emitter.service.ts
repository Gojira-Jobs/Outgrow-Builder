import {Injectable} from "@angular/core";
import {EmitterStore} from "./emitter.store";
import {EventEmitter} from '@angular/core';
import {BehaviorSubject,Observable} from 'rxjs';
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
      private _emitters: BehaviorSubject<any> = new BehaviorSubject("hello");
    // Set a new event in the store with a given ID
    // as key
     get(ID: string): Observable<any> {
        return this._emitters.asObservable();
    }

    notifyChanges(ID) {
        console.log("done dana dan");
            this._emitters.next("done");
    }


}