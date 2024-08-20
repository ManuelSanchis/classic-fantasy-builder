import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Index } from '../../../interfaces/data/index.interface';

@Injectable({providedIn: 'root'})
export class IndexService {

  private indexUrl: string = 'assets/data/index.json';

  constructor(private http: HttpClient) { }

  getIndex(): Observable<Index[]> {
    const url = this.indexUrl;
    return this.http.get<Index[]>(url);
  }

}
