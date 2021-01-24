import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; // CLI imports router
import { CommonModule } from '@angular/common';

import { routes } from './config.routing';

import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { ConfigComponent } from './config.component';
import { FilterComponent } from './filter/filter.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SinglefilterComponent } from './filter/singlefilter/singlefilter.component';

@NgModule({
  declarations: [
    ConfigComponent,
    FilterComponent,
    WelcomeComponent,
    SinglefilterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatProgressBarModule,
  ],
  providers: [],
  exports: [RouterModule]
})
export class ConfigModule { }