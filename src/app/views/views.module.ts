import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project01Component } from './project01/project01.component';
import { CatalogueComponent } from './catalogue/catalogue.component';

const views = [Project01Component];

@NgModule({
  declarations: [...views, CatalogueComponent],
  imports: [CommonModule],
  exports: [...views],
})
export class ViewsModule {}
