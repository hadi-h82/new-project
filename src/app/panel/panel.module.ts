import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { PanelComponent } from './panel.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ContentComponent } from './layout/content/content.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [PanelComponent,LayoutComponent,HeaderComponent,SidebarComponent,ContentComponent,FooterComponent],
  imports: [
    CommonModule,
    PanelRoutingModule,
    MaterialModule
  ]
})
export class PanelModule { }
