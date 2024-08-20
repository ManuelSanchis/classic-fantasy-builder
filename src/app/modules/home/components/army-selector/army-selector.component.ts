import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ArmySelectionService } from '../../../../shared/services/army-selection.service';
import { Index } from '../../../../interfaces/data/index.interface';
import { IndexService } from '../../services/index.service';

@Component({
  selector: 'home-army-selector',
  templateUrl: './army-selector.component.html',
  styleUrl: './army-selector.component.css'
})
export class ArmySelectorComponent implements OnInit {

  armies: Index[] = [];
  selectedArmyId: string | null = null;

  constructor(
    private armySelectionService: ArmySelectionService,
    private indexService: IndexService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadIndex();
  }

  loadIndex(): void {
    this.indexService.getIndex().subscribe((data: Index[]) => {
      this.armies = data;
      if (this.armies.length > 0) {
        this.selectedArmyId = this.armies[0].id;
        this.armySelectionService.setSelectedArmyId(this.selectedArmyId);
      }
    });
  }

  onArmyChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedArmyId = target.value;
    this.armySelectionService.setSelectedArmyId(this.selectedArmyId);
  }

  selectArmy(): void {
    this.router.navigate(['/builder', this.selectedArmyId]);
  }

}
