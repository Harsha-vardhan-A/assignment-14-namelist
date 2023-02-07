import { SlicePipe } from '@angular/common';
import { Component, Input} from '@angular/core';
import {CommoninputsService } from '../commoninputs.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  getdetails:any[]=[];
  // d:object={name:'',desc:''};
  constructor(private data:CommoninputsService){
    // console.log(data.alldetails)
    
    // this.getdetails=data.alldetails;
    this.data.testEmitter.subscribe((res)=>{
      console.log(res);
      this.getdetails.push(res)
    })
    // console.log(this.getdetails)
  }
  // deleting the details
  remove(event:number)
  {
    // console.log(typeof(this.getdetails));
    // console.log(this.getdetails[event]);
    // this.data.alldetails.splice(event,1);
    this.getdetails.splice(event,1);
    
  }
}
