import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ejemplo1Component } from './componentes/ejemplo1/ejemplo1.component';
import { MmaterialModule } from './mmaterial/mmaterial.module';
import { FormsModule } from '@angular/forms';
import { Ejemplo2Component } from './componentes/ejemplo2/ejemplo2.component';

@NgModule({
  declarations: [
    AppComponent,
    Ejemplo1Component,
    Ejemplo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MmaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
