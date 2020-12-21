import {ErrorHandler, Injectable} from "@angular/core";
import {MessageService} from "primeng/api";

@Injectable()
export class GlobalExceptionHandler implements ErrorHandler {

  constructor(private messageService: MessageService) {
  }

  handleError(error: any): void {
    console.error(error);
    this.messageService.add({
      severity: 'error',
      summary: 'Unexpected error occurred',
      detail: 'Check console or contact IT support'
    });
  }

}
