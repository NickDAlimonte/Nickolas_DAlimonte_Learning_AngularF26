import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Character } from './shared/models/character';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Nickolas_DAlimonte_learning_AngularF26');
  testVar1: string = 'This is the first test variable';
  testVar2: number = 300;

  characterList: Character[] = [
    {
      name: 'Vaelysong',
      levelCap: true,
      class: "Warrior",
      level: 90,
      race: 'Void Elf',
      gearQuality: 286,
      game: "World of Warcraft",
    },

    {
      name: 'Aelithiria',
      race: "Alvarin",
      class: "Dex Footie",
      gearQuality: "Pansar Carapace",
      game: "Mortal Online II",
    },

    {
      name: "Keliza",
      race: "Alvarin",
      class: "Hybrid",
      gearQuality: "Plate",
      game: "Mortal Online 2",
    },

    {
      name: "Keliza",
      race: "Draenei",
      class: "Paladin",
      levelCap: false,
      level: 81,
      gearQuality: 90,
      game: "World of Warcraft",
    },

    {
      name: "Aelithiria",
      race: "Void Elf",
      class: "Mage",
      levelCap: true,
      level: 90,
      gearQuality: 248,
      game: "World of Warcraft",
    },
    {
      name: "Kitiza",
      race: "Void Elf",
      class: "Priest",
      levelCap: false,
      level: 86,
      gearQuality: 126,
      game: "World of Warcraft",
    }


  ];
}
