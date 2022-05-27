import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RightComponent } from '../right/right.component';
import { LeftComponent } from '../left/left.component';
import { MiddleComponent } from '../middle/middle.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, RightComponent, LeftComponent, MiddleComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
