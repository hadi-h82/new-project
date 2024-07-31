import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../core/pipes/translate.pipe';
import { CustomCheckboxInputComponent } from './custom-checkbox-input/custom-checkbox-input.component';



@NgModule({
  declarations: [TranslatePipe,CustomCheckboxInputComponent],
  imports: [
    CommonModule,
    
  ],
  exports:[TranslatePipe,CustomCheckboxInputComponent]
})
export class SharedModule { }
