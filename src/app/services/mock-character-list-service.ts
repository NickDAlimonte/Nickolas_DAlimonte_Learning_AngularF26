import { Service, signal, computed, effect, inject } from '@angular/core';
import { Character } from '../shared/models/character';
import { APP_CONFIG } from '../shared/config/app-config';

@Service()
export class MockCharacterListService {
  startingListSize: number;
  constructor() {
    this.startingListSize = this.characterList().length;
    effect(() => {
      if (this.startingListSize < this.characterList().length) {
        console.log(
          'The character list has grown by ' +
            (this.characterList().length - this.startingListSize) +
            'since you have opened this page',
        );
      } else if (this.startingListSize === this.characterList().length) {
        console.log('The character list is the same as when you launched this page.');
      } else if (this.startingListSize > this.characterList().length) {
        console.log(
          'The list has shrunk by ' +
            (this.startingListSize - this.characterList().length) +
            " characters since you've launched this page. " +
            this.mortalCharacters().length +
            ' are characters from Mortal',
        );
      }
    });

    effect(() => {
      console.log('There are currently ', this.characterList().length, 'Characters in the list');
    });
  }

  private config = inject(APP_CONFIG);
  apiUrl = this.config.apiBaseUrl;

  private characters = signal<Character[]>([
    {
      id: 1,
      name: 'Mock Character',
      levelCap: true,
      class: 'Warrior',
      level: 90,
      race: 'Void Elf',
      gearQuality: 286,
      game: 'Mock Game',
    },

    {
      id: 2,
      name: 'Mock Character 2',
      race: 'Fake Race',
      class: 'Dex Footie',
      gearQuality: 'Pansar Carapace',
      game: 'Mock Game',
    },
  ]);

  characterList = this.characters.asReadonly();

  mortalCharacters = computed(() =>
    this.characterList().filter((c) => c.game === 'Mortal Online II'),
  );

  nonMaxLevelCharacters = computed(() => this.characterList().filter((c) => !c.levelCap));

  nonMaxLevelWarcraftCharacters = computed(() =>
    this.nonMaxLevelCharacters().filter((c) => c.game === 'World of Warcraft'),
  );

  addCharacter(c: Character) {
    this.characters.update((characterList) => [...characterList, c]);
  }

  removeCharacter(id: number) {
    this.characters.update((characterList) => characterList.filter((i) => i.id !== id));
  }
}
