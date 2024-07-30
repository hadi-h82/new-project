import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslationService } from './i18n/translation.service';
import { locale as faLang } from './../app/i18n/vocabs/fa';
import { locale as enLang } from './../app/i18n/vocabs/en';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  

constructor(private translationService: TranslationService){
  
  this.translationService.loadTranslations(faLang);
  this.translationService.loadTranslations(enLang); 

  if(localStorage.getItem('language')){
    this.translationService.setLanguage(localStorage.getItem('language') as string);
    
  }
  else  {
    this.translationService.setLanguage('en');
  }  
}
  ngOnInit(): void {
    console.log("localStorage.getItem('language')=",localStorage.getItem('language'));

    if (localStorage.getItem('language') === 'fa')
      document.documentElement.setAttribute("dir", "rtl");
    else
      document.documentElement.setAttribute("dir", "ltr");

   
  }

  title = 'new-project';
}
