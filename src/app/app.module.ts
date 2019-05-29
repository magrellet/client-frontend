import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectiveComponent } from './directive/directive.component';
import { ClientComponent } from './client/client.component';
import { ClientService } from './client/client.service';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const router: Routes = [
  {
    path: '', redirectTo: '/clients', pathMatch: 'full'
  }, {
    path: 'directives', component: DirectiveComponent
  }, {
    path: 'clients', component: ClientComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectiveComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(router)
  ],
  providers: [
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
