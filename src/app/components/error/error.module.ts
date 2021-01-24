import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; // CLI imports router

import { routes } from './error.routing';

import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    NotfoundComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
  ],
  providers: [],
  exports: [RouterModule]
})
export class ErrorModule { }