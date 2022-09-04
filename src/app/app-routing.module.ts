import { NgModule } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { ContatoComponent } from './contato/contato.component';
import { FaqComponent } from './faq/faq.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
{ path: '', redirectTo: "/home", pathMatch: "full"},
{ path: 'home', component: HomeComponent},
{ path: 'contato', component: ContatoComponent},
{ path: 'faq', component: FaqComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
