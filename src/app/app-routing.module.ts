import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogueComponent } from './views/catalogue/catalogue.component';
import { Project01Component } from './views/project01/project01.component';
const routes: Routes = [
  { path: '', component: CatalogueComponent },
  { path: 'project-01', component: Project01Component },
];

// add 404 route
routes.push({ path: '**', component: CatalogueComponent });

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
