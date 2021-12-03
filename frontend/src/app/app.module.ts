import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MachineComponent } from './machine/machine.component';
import { MachinesComponent } from './machines/machines.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddMachineComponent } from './add-machine/add-machine.component';

@NgModule({
  declarations: [
    AppComponent,
    MachineComponent,
    MachinesComponent,
    NavbarComponent,
    AddMachineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
