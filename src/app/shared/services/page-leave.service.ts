import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageLeaveService {

    canDeactivate(): Observable<boolean> {
      return of(confirm('¿Estas seguro de que quieres abandonar la página?'));
    }
}
