import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { randomInt } from 'crypto';
import { MessageService } from "primeng/api";
import { Document } from "../domain/document";

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss']
})
export class AddDocumentComponent implements OnInit {

  addDocumentForm = new FormGroup({});

  constructor(private fb: FormBuilder, private messageService: MessageService) {
  }

  ngOnInit() {
    this.addDocumentForm = this.fb.group({
      documentName: '',
      createDate: new Date(),
      tags: []
    });
  }

  addInput() {
    this.addDocumentForm.patchValue({
      tags: ['Ala', 'Ma', 'Kota']
    });
  }
}
