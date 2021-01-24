import { Routes } from '@angular/router';

import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {
      path: '404',
      component: NotfoundComponent
    },
    {
      path: '**',
      redirectTo: '404',
      pathMatch: 'full'
    },
];