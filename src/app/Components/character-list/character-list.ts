import { Component } from '@angular/core';
import { Character } from '../../shared/models/character';

@Component({
  selector: 'app-character-list',
  imports: [],
  templateUrl: './character-list.html',
  styleUrl: './character-list.scss',
})
export class CharacterList {
  characterList: Character[] = [
    {
      name: 'Vaelysong',
      levelCap: true,
      class: 'Warrior',
      level: 90,
      race: 'Void Elf',
      gearQuality: 286,
      game: 'World of Warcraft',
    },

    {
      name: 'Aelithiria',
      race: 'Alvarin',
      class: 'Dex Footie',
      gearQuality: 'Pansar Carapace',
      game: 'Mortal Online II',
    },

    {
      name: 'Keliza',
      race: 'Alvarin',
      class: 'Hybrid',
      gearQuality: 'Plate',
      game: 'Mortal Online 2',
    },

    {
      name: 'Keliza',
      race: 'Draenei',
      class: 'Paladin',
      levelCap: false,
      level: 81,
      gearQuality: 90,
      game: 'World of Warcraft',
    },

    {
      name: 'Aelithiria',
      race: 'Void Elf',
      class: 'Mage',
      levelCap: true,
      level: 90,
      gearQuality: 248,
      game: 'World of Warcraft',
    },
    {
      name: 'Kitiza',
      race: 'Void Elf',
      class: 'Priest',
      levelCap: false,
      level: 86,
      gearQuality: 126,
      game: 'World of Warcraft',
    },
  ];
}
