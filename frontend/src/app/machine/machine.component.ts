import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Machine } from '../models/machine';
import { MachineService } from '../services/machine.service';
import {enableProdMode} from '@angular/core';

enableProdMode();
@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss']
})
export class MachineComponent implements OnInit {

  listMachine :Array<Machine> = []
  MachineSubs: Subscription = new Subscription();

  constructor(public machineService:MachineService) {
    this.machineService.get()
    this.MachineSubs = this.machineService.machineSubject.subscribe((rsp) => {
      this.listMachine = rsp;
    })
    this.machineService.emitMachineSubject()
  }

  ngOnInit(): void {
  }

}
