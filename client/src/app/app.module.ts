import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { FooterComponent } from './main/footer/footer.component';
import { NavComponent } from './main/nav/nav.component';
import { CurrentDealsComponent } from './main/home/current-deals/current-deals.component';
import { LatestLaunchComponent } from './main/home/latest-launch/latest-launch.component';
import { TrendingComponent } from './main/home/trending/trending.component';
import { OthersComponent } from './main/home/others/others.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    FooterComponent,
    NavComponent,
    CurrentDealsComponent,
    LatestLaunchComponent,
    TrendingComponent,
    OthersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
