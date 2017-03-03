import {EventEmitter} from '@angular/core';
interface Emitter{
    ID:string;
    value:EventEmitter<any>;
}
export const EmitterStore:Emitter[]=[
    {ID:'scriptLoaded',value:new EventEmitter<any>()}
]