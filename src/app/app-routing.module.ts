import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { DirectiveComponent } from './directive/directive.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/clients', pathMatch: 'full'
  }, {
    path: 'directives', component: DirectiveComponent
  }, {
    path: 'clients', component: ClientComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
