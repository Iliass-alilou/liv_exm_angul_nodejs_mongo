import { Component, OnInit } from '@angular/core';
import { MachineService } from '../services/machine.service';
import {enableProdMode} from '@angular/core';

enableProdMode();
@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.scss']
})
export class MachinesComponent implements OnInit {

  constructor(public machineService:MachineService) {

  }
  ngOnInit(): void {
    
  }

  sendData(event){
    const rslt = this.machineService.insert(event)
    console.log(rslt)
  }

}
