import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddDocumentComponent} from "./add-document/add-document.component";

const routes: Routes = [
  {path: 'add-document', component: AddDocumentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
