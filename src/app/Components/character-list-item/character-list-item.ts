import { Component, input } from '@angular/core';
import { Character } from '../../shared/models/character';

@Component({
  selector: 'app-character-list-item',
  imports: [],
  templateUrl: './character-list-item.html',
  styleUrl: './character-list-item.scss',
})
export class CharacterListItem {
  character = input.required<Character>();

}
