import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lang } from '../../app/core/models/lang.model';
import { TranslationService } from '../i18n/translation.service';



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit{

  items: lang[] = [
    {value: 'fa', viewValue: 'Fa'},
    {value: 'en', viewValue: 'En'},
  ];
  constructor(private router: Router,private translationService: TranslationService){}

  ngOnInit(): void {}

  navigation(){
    this.router.navigate(['./auth/login']);
  }

  onClick(e:any){
    this.translationService.setLanguage(e.value);
    if(e.value === 'fa')
      document.documentElement.setAttribute("dir", "rtl");
    location.reload();  
  }
}
