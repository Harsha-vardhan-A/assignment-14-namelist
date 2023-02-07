import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommoninputsService {
  alldetails:any[]=[];
  testEmitter: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
