import { Routes } from '@angular/router';

import { ConfigComponent } from './config.component';
import { FilterComponent } from './filter/filter.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
  {
    path: '',
    component: ConfigComponent,
    children: [
      {
        path: '',
        redirectTo: 'welcome'
      },
      {
        path: 'welcome',
        component: WelcomeComponent
      },
      {
        path: 'filter',
        component: FilterComponent
      },
    ]
  },
];