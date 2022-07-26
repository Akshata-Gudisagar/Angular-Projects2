import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AngularrountingComponent } from './angularrounting/angularrounting.component';
import { ErrorfoundComponent } from './errorfound/errorfound.component';
import { HomeComponent } from './home/home.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsconditionsComponent } from './termsconditions/termsconditions.component';

const routes: Routes = [
  {path:'angularrounting',component:AngularrountingComponent},
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'privacypolicy',component:PrivacypolicyComponent},
  {path:'termsconditions',component:TermsconditionsComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:ErrorfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
