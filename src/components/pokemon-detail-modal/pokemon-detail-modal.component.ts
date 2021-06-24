import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokemonDetailModal } from 'src/data-models/poke-types';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail-modal.component.html',
  styleUrls: ['./pokemon-detail-modal.component.scss']
})
export class PokemonDetailModalComponent {
  isDirty: boolean;

  constructor(public dialogRef: MatDialogRef<PokemonDetailModalComponent>, @Inject(MAT_DIALOG_DATA) public data: PokemonDetailModal) { }

  save(): void {
    //it auto saves but this shows how we can pass the data back for api update
    this.dialogRef.close(this.data.pokemon);
  }

  close(): void {
    this.dialogRef.close();
  }
}
