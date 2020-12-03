import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultationComponent } from './consultation/consultation.component';
import { CreationComponent } from './creation/creation.component';

const routes: Routes = [
    {
      path: 'creer',
      component: CreationComponent,
    },
    {
      path: 'consulter',
      component: ConsultationComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class tornoaRoutingModule { }
