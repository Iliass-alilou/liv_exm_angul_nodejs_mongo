import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMachineComponent } from './add-machine/add-machine.component';
import { MachineComponent } from './machine/machine.component';
import { MachinesComponent } from './machines/machines.component';


const routes: Routes = [
  {path: '', component: MachinesComponent },
  {path: 'listMachines', component: MachineComponent },
  {path: '**', redirectTo:"not-found" },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
