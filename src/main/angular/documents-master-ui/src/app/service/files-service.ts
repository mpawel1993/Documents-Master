import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class FilesService {

  constructor(private httpClient: HttpClient) {
  }

  public sendFilesToBackEnd(files: any): Observable<any> {
    const formData = new FormData();
    formData.append('file', files);
    return this.httpClient.post("http://localhost:8080/documents/files/upload", formData);
  }

}
