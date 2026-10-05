import { Component, inject, input, output } from '@angular/core';
import { Character } from '../../shared/models/character';
import { ContentEvent } from '../../shared/models/content-event';
import {CharacterListService} from '../../services/character-list-service';

@Component({
  selector: 'app-character-list-item',
  imports: [],
  templateUrl: './character-list-item.html',
  styleUrl: './character-list-item.scss',
})
export class CharacterListItem {
  character = input.required<Character>();
  first = input.required<boolean>();
  last = input.required<boolean>();
  listSize = input.required<number>();

  clicked = output<ContentEvent>();

  newCharacter: Character = {
    id: 15,
    name: "testName",
    class: "testClass",
    race: "testRace",
    gearQuality: "None",
    game: "testGame"

  }

  cardClicked(): void {
    this.clicked.emit({
      id: this.character().id,
      action: 'clicked', });
  }
}
