import { Component, OnInit } from '@angular/core';

import { ArmySelectionService } from '../../../../shared/services/army-selection.service';

@Component({
  selector: 'builder-unit-selector',
  templateUrl: './unit-selector.component.html',
  styleUrl: './unit-selector.component.css'
})
export class UnitSelectorComponent implements OnInit {

  selectedArmyId: string | null = null;

  constructor(private armySelectionService: ArmySelectionService) { }

  ngOnInit(): void {
    this.armySelectionService.selectedArmyId$.subscribe(id => {
      this.selectedArmyId = id;
    });
  }

}
