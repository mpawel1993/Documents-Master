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

  //todo add flags
  cities = ['', 'Poland', 'Germany', 'Netherlans'];
  values: string[] = ['Java', 'C#'];
  results: string[] = [];
  tagValue: string = '';

  constructor(private fb: FormBuilder, private messageService: MessageService) {
  }

  search(event: any) {
    this.results = ['a', 'b', 'c']
  }

  ngOnInit(): void {
    this.inputForm = this.fb.group({
      name: '',
      issuer: '',
      creationDate: '',
      uploadDate: '',
      country: '',
      folder: '',
      tags: ''
    });

    this.inputForm.valueChanges.subscribe(console.log)
  }

  displaySubmit() {
    this.document = this.inputForm.value;
    console.log('Provided document ', this.document);
    this.messageService.add({severity: 'success', summary: 'Submitted', detail: 'Submitted'});
  }

  addInput() {
    this.values.push(this.tagValue);

  }
}
