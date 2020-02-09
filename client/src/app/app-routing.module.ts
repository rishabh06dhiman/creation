import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { NavComponent } from './main/nav/nav.component';
import { FooterComponent } from './main/footer/footer.component';
import { CurrentDealsComponent } from './main/home/current-deals/current-deals.component';
import { LatestLaunchComponent } from './main/home/latest-launch/latest-launch.component';
import { OthersComponent } from './main/home/others/others.component';
import { TrendingComponent } from './main/home/trending/trending.component';


const routes: Routes = [
{ path: '', redirectTo: 'main/home/', pathMatch: 'full' },
{path:'main', component:MainComponent},
{ path: 'main/home', component: HomeComponent },
{ path: 'main/home/current-deals', component: CurrentDealsComponent },
{ path: 'main/home/latest-launch', component: LatestLaunchComponent },
{ path: 'main/home/others', component: OthersComponent },
{ path: 'main/home/trending', component: TrendingComponent },
{ path: 'main/nav', component: NavComponent },
{ path: 'main/footer', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
