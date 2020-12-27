import {Component, OnInit} from '@angular/core';
import {FilesService} from "../service/files-service";

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  files: Array<File> = [];

  constructor(private filesService: FilesService) {
  }

  ngOnInit(): void {
  }

  uploadFile(event: any) {
    let actualFiles: Array<File> = event.target.files;
  }

  deleteAttachment(index: any) {
  }

  sendToBackEnd() {
    this.filesService.sendFilesToBackEnd(this.files).subscribe(resp => console.log(resp));
  }
}
