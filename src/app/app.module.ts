import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';
import { NavigationModule } from './navigation/navigation.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ViewsModule, NavigationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
