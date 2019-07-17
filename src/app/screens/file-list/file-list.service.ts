import { Injectable } from '@angular/core';
import { IrsHttpService } from '@app/shared';

@Injectable({
  providedIn: 'root'
})
export class FileListService {

  constructor(private http: IrsHttpService) { }

  getFilelist() {
    return this.http.getPage('user/repos');
  }

}
