import { Component, forwardRef, Input, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-checkbox-input',
  templateUrl: './custom-checkbox-input.component.html',
  styleUrl: './custom-checkbox-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: forwardRef(() => CustomCheckboxInputComponent),
    }
  ]
})
export class CustomCheckboxInputComponent implements OnInit ,ControlValueAccessor{



  constructor(){}

 

  valueChanged(val: any) {
    this.onChange(val.checked);
  }
  onChange = (value: Boolean) => {
    console.log(value);
    console.log('yes');
    
  };

  ngOnChanges(changes: SimpleChanges): void {

  }

  writeValue(value: number): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  ngOnInit(): void {}
}
