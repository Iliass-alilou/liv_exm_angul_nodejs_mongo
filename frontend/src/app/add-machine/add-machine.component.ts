import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Machine } from '../models/machine';
import {enableProdMode} from '@angular/core';

enableProdMode();

@Component({
  selector: 'app-add-machine',
  templateUrl: './add-machine.component.html',
  styleUrls: ['./add-machine.component.scss']
})
export class AddMachineComponent implements OnInit {

  @Output() submitForm = new EventEmitter<Machine>();
   constructor() { }
 
   ngOnInit(): void {
   }
 
 
   sendData(nom,ip,systemExploitation){
     const etat = "arretee"
     this.submitForm.emit(new Machine(nom.value,ip.value,systemExploitation.value,etat))
     alert("etat par defaut arretee")
     console.log(nom.value,ip.value,systemExploitation.value,etat);
   }

}
