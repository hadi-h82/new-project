import {
  Component,
  forwardRef,
  Input,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  Validator,
} from '@angular/forms';
import { OptionList } from '../../core/models/option-list.model';

@Component({
  selector: 'app-multiCheckbox',
  templateUrl: './custom-checkbox-input.component.html',
  styleUrl: './custom-checkbox-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CustomCheckboxInputComponent),
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CustomCheckboxInputComponent),
      multi: true,
    },
  ],
})
export class CustomCheckboxInputComponent
  implements OnInit, ControlValueAccessor, Validator
{
  @Input('form') form: any;
  @Input('min') min: number = 0;
  @Input('max') max: number = 5;
  @Input('list') list: OptionList[] = [];

  items: number[] = [];
  isValid: boolean = false;
  constructor() {}

  
  valueChanged(val: any, id: number) {
    this.onChange(val.checked, id);
    
  }
  onChange = (value: Boolean, id: number) => {
    if (value) {
      this.items.push(id);
    } else this.items = this.items.filter((x) => x != id);

  
    this.writeValue(this.items);
  };

  validate(c: FormControl) {
    this.isValid = (this.items.length >= this.min)? true :false;
    return this.isValid
      ? null
      : {
          jsonParseError: {
            valid: false,
          },
        };
  }

  ngOnChanges(changes: SimpleChanges): void {}

  writeValue(value: number[] = []): void {
  }

  registerOnChange(fn: any): void {
    this.writeValue = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {}

  ngOnInit(): void {}
}
