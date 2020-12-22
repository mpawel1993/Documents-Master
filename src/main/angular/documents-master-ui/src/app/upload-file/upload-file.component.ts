import {Component, OnInit} from '@angular/core';
import {FilesService} from "../service/files-service";

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  files: any = [];

  constructor(private filesService: FilesService) {
  }

  ngOnInit(): void {
  }

  uploadFile(event: any) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
    }
  }

  deleteAttachment(index: any) {
    this.files.splice(index, 1)
  }

  sendToBackEnd() {
    this.filesService.sendFilesToBackEnd(this.files).subscribe(resp => console.log(resp));
  }
}
