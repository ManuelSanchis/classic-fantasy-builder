import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArmySelectionService {

  private selectedArmyIdSubject = new BehaviorSubject<string | null>(null);
  selectedArmyId$ = this.selectedArmyIdSubject.asObservable();

  setSelectedArmyId(id: string | null): void {
    this.selectedArmyIdSubject.next(id);
  }
}
