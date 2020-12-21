import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ToastModule} from 'primeng/toast';
import {MessageService} from "primeng/api";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TopBarComponent} from './top-bar/top-bar.component';
import {AddDocumentComponent} from './add-document/add-document.component';
import {FormsModule, NgControl, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from 'primeng/button';
import {GlobalExceptionHandler} from "./advice/global-exception-handler";
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    AddDocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    CalendarModule,
    FormsModule
  ],
  providers: [MessageService,
    {provide: ErrorHandler, useClass: GlobalExceptionHandler}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
