import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Component1Component } from './module2/component1/component1.component';
import { Module2Module } from './module2/module2.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Module2Module

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
