import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root',
})

export class authGuardGuard {
  constructor(
  
  ) {
  }

  canActivate(
 
  ): boolean {
    console.log('guard is ok');

    
    return true;
  }
}
