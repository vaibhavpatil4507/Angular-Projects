import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { OutsideComponent } from './outside/outside.component';
import { UserDataService } from './user-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    OutsideComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
