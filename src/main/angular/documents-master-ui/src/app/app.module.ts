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
import {DropdownModule} from 'primeng/dropdown';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { DragDropDirective } from './direcives/drag-drop-directive';
import {FilesService} from "./service/files-service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    AddDocumentComponent,
    UploadFileComponent,
    DragDropDirective
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
    FormsModule,
    DropdownModule,
    HttpClientModule
  ],
  providers: [MessageService,
    {provide: ErrorHandler, useClass: GlobalExceptionHandler},
    FilesService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
