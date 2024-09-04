import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ejemplo1Component } from './componentes/ejemplo1/ejemplo1.component';
import { MmaterialModule } from './mmaterial/mmaterial.module';

@NgModule({
  declarations: [
    AppComponent,
    Ejemplo1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MmaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
