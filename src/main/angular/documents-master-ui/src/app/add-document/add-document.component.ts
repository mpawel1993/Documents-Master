import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MessageService } from "primeng/api";
import { Country, Tag } from '../util/data-types';



@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss']
})
export class AddDocumentComponent implements OnInit {

  addDocumentForm = new FormGroup({});
  documentTypes = ['', 'Email', 'Paper Document']
  countries$: BehaviorSubject<Array<Country>> = new BehaviorSubject(new Array<Country>());
  proposedTags$: BehaviorSubject<Array<Tag>> = new BehaviorSubject(new Array<Tag>());

  constructor(private fb: FormBuilder, private messageService: MessageService) {
  }

  ngOnInit() {
    this.initForm();
    this.countries$.next([{ id: '1', name: 'Poland' }, { id: '2', name: 'Germany' }, { id: '3', name: 'Poland' }]);
  }

  initForm(): void {
    this.addDocumentForm = this.fb.group({
      documentName: '',
      createDate: new Date(),
      tags: [],
      documentType: undefined,
      country: new FormControl(['']),
      expirationDate: undefined,
      selectedCity: undefined
    });
  }

  addInput() {
    this.addDocumentForm.patchValue({
      tags: ['Ala', 'Ma', 'Kota']
    });
  }

  filterCountry(event: any) {
    this.proposedTags$.next([{ id: '1', name: 'Tax Offcie' }, { id: '2', name: 'Payment' }, { id: '3', name: 'Bill' }]);
  }

  submitDocument() {
    console.log(' this.addDocumentForm.value', this.addDocumentForm.controls);
  }

}
