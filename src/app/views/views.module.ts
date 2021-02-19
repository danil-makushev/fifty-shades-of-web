import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project01Component } from './project01/project01.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { P01CardComponent } from './project01/components/p01-card/p01-card.component';
import { P01CardListComponent } from './project01/components/p01-card-list/p01-card-list.component';
import { AppRoutingModule } from '../app-routing.module';

const views = [Project01Component];

@NgModule({
  declarations: [
    ...views,
    CatalogueComponent,
    P01CardComponent,
    P01CardListComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
  exports: [...views],
})
export class ViewsModule {}
