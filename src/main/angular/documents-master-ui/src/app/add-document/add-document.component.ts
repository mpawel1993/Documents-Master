import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MessageService} from "primeng/api";
import {Document} from "../domain/document";

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss']
})
export class AddDocumentComponent implements OnInit {

  inputForm = new FormGroup({});

  document: Document | undefined

  constructor(private fb: FormBuilder, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.inputForm = this.fb.group({
      name: '',
      issuer: '',
      creationDate: '',
      submitDate: ''
    });

    this.inputForm.valueChanges.subscribe(console.log)
  }

  displaySubmit() {
    this.document = this.inputForm.value;
    console.log('Provided document ', this.document);
    this.messageService.add({severity: 'success', summary: 'Submitted', detail: 'Submitted'});
  }
}
