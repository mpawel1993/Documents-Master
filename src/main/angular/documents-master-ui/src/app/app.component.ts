import { Component } from '@angular/core';
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'documents-master-ui';

  constructor(private messageService: MessageService) {
  }

  showNegativeMessage() {
    this.messageService.add({severity:'error', summary:'PrimeNg', detail:'Hello your PrimeNg'});
  }

  showPositiveMessage() {
    this.messageService.add({severity:'success', summary:'PrimeNg', detail:'Hello your PrimeNg'});
  }
}
