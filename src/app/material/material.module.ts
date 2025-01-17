import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

const modules = [
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatSlideToggleModule,
  MatButtonModule,
  MatToolbarModule,
  MatSelectModule,
  MatCheckboxModule

  
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
