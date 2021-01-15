import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultationComponent } from './consultation/consultation.component';
import { CreationComponent } from './creation/creation.component';

const routes: Routes = [
    {
      path: 'create',
      component: CreationComponent,
    },
    {
      path: 'consult',
      component: ConsultationComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntitesRoutingModule { }
