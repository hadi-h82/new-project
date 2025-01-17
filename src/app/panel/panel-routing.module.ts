import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { authGuardGuard } from '../core/guards/auth-guard/auth-guard.guard';

const routes: Routes = [
  { path: '', component: LayoutComponent ,  canActivate: [authGuardGuard],  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
