import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../core/pipes/translate.pipe';
import { CustomCheckboxInputComponent } from './custom-checkbox-input/custom-checkbox-input.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [TranslatePipe,CustomCheckboxInputComponent],
  imports: [
    CommonModule,
    MaterialModule
    
  ],
  exports:[TranslatePipe,CustomCheckboxInputComponent,MaterialModule]
})
export class SharedModule { }
