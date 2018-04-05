import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule} from '@angular/flex-layout';
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule
  ],
  declarations: []
})
export class CustomMaterialModule { }
