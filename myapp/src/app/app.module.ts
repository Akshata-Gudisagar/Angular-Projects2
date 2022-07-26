import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventfielterPipe } from './eventfielter.pipe';
import { DialogModule } from 'primeng/dialog'
import { ButtonModule } from 'primeng/button'
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    ChildcomponentComponent,
    EventfielterPipe,
    ReactiveformComponent,
    ParentcomponentComponent,
    ChildcomponentComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DialogModule,
    ButtonModule,
    AccordionModule,
    TableModule,
    ReactiveFormsModule,
    CheckboxModule,
    MatRadioModule,
    BrowserAnimationsModule

    
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
