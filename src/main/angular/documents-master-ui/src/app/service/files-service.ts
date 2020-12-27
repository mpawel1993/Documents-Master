import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  private file: any;

  constructor(private httpClient: HttpClient) {
  }

  public sendFilesToBackEnd(files: File[]): Observable<any> {
    const formData = new FormData();
    this.file = files;
    formData.append('file', this.file);
    return this.httpClient.post("http://localhost:8080/documents/files/upload", formData);
  }

}
