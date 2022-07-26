import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TableModule} from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularrountingComponent } from './angularrounting/angularrounting.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsconditionsComponent } from './termsconditions/termsconditions.component';
import { ErrorfoundComponent } from './errorfound/errorfound.component';
import { AngularRoutingComponent } from './angular-routing/angular-routing.component';
import { DialogModule } from 'primeng/dialog'
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
 
@NgModule({
  declarations: [
    AppComponent,
    AngularrountingComponent,
    HomeComponent,
    AboutusComponent,
    PrivacypolicyComponent,
    TermsconditionsComponent,
    ErrorfoundComponent,
    AngularRoutingComponent,
    CustomerDashboardComponent,
    
    // ProductDashboardComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DialogModule,
    ButtonModule,
    HttpClientModule,
    BrowserModule,
    DialogModule,
    HttpClientModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
