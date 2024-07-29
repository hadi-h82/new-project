import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import _ from "lodash";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  form:FormGroup;
  constructor(private router: Router,private fb: FormBuilder){
    this.form = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
     })
  }

validForm = {
  userName: 'hadi',
  password: '123456',
};
  ngOnInit(): void {

  }


  submit(){
   
    (_.isEqual(this.validForm,this.form.value)) ? this.router.navigate(['/panel']) : '';

  }

}
