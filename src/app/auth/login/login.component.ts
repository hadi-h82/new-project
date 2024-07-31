import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import _ from "lodash";
import { OptionList } from '../../core/models/option-list.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  form:FormGroup | any;
  showError: boolean = false;
  textError: string = '* incorrect username or password'
  validForm = {
    userName: 'hadi',
    password: '123456',
  };


  list : OptionList[] = [
    {
      id:1,
      value:'گزینه ۱'
    },
    { id:2,
      value:'گزینه ۲'
    },
    { id:3,
      value:'گرینه ۳'
    },
  ]
  


  constructor(private router: Router,private fb: FormBuilder){}
   ngOnInit() {
    this.form = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      multiCheckbox: [[], [Validators.required]] 
			
			
     });
     console.log('this.form =',this.form);

  }


  submit(){
   
    (_.isEqual(this.validForm,this.form.value)) ? this.router.navigate(['/panel']) : this.showError = true;

  }


  //  createFormArrayCheckbox(fa: FormArray) {
    
	// 	const fg = this.fb.group({
	// 		checkbox: [ null, [Validators.required]],
	// 	});
	// 	fa.push(fg);
	// }


  //  createFormArray<T>(list: T[]) {
	// 	const fa = this.fb.array([]);
	// 	list?.forEach( (i) => { 
	// 		 this.createFormArrayCheckbox(fa);
	// 	});
	// 	return fa;
	// }


}
