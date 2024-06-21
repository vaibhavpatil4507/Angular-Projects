import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component1/component1.component';
import { BrowserModule } from '@angular/platform-browser';
import { Module3Module } from '../module3/module3.module';



@NgModule({
  declarations: [
    Component1Component
  ],
  imports: [
    BrowserModule,
    CommonModule,
    Module3Module,

  ],
  exports:[
    Component1Component
  ]
})
export class Module2Module { }
