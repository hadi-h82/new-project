import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit{

  constructor(private router: Router){}

  ngOnInit(): void {
    
  }


  navigation(){
    this.router.navigate(['./auth/login']);
  }
}
