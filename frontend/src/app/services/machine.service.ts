import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Machine } from '../models/machine';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  //url = "http://localhost:3001/"
  constructor(private http: HttpClient) {}
  
  listMachine:Array<Machine> = [];
  machineSubject = new Subject<any>();


  insert(machine){
    const url = environment["apiURL"]+"/machines";
    return this.http.post(url,machine).subscribe(rsp=>rsp)
  }

  get(){
    const url = environment["apiURL"]+"/machines";
    this.http.get<Array<Machine>>(url).subscribe(machines=>{
      this.listMachine=machines;
      this.emitMachineSubject();
    })
  }


  emitMachineSubject(){
    this.machineSubject.next(this.listMachine)
  }
}
