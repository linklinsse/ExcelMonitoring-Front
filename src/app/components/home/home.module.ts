import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; // CLI imports router
import { CommonModule } from '@angular/common';

import { routes } from './home.routing';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { HomeComponent } from './home.component';
import { ExcelComponent } from './excel/excel.component';
import { ButtomBarComponent } from './buttom-bar/buttom-bar.component';
import { WidgetBarComponent } from './widget-bar/widget-bar.component';

@NgModule({
  declarations: [
    HomeComponent,
    ExcelComponent,
    ButtomBarComponent,
    WidgetBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatProgressSpinnerModule,
    MatInputModule,
  ],
  providers: [],
  exports: [RouterModule]
})
export class HomeModule { }