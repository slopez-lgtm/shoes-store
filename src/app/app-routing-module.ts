import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoeCatalog } from './shoe-catalog/shoe-catalog';
import { About } from './about/about';


const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'zapatillas', 
    pathMatch: 'full' 
  }, 
  { 
    path: 'zapatillas', 
    component: ShoeCatalog
  }, 
  { 
    path: 'nosotros', 
    component: About
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }