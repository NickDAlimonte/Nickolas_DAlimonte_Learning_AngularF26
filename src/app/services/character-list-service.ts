import { Service, signal, computed, effect } from '@angular/core';
import { Character } from '../shared/models/character';

@Service()
export class CharacterListService {
  startingListSize: number;
  constructor() {
    this.startingListSize = this.characterList().length;
    effect(()=> {
      if(this.startingListSize < this.characterList().length){
        console.log("The character list has grown by " + (this.characterList().length - this.startingListSize) + "since you have opened this page")
      }else if(this.startingListSize === this.characterList().length){
        console.log("The character list is the same as when you launched this page.")
      }else if(this.startingListSize > this.characterList().length){
        console.log("The list has shrunk by " + (this.startingListSize - this.characterList().length) + " characters since you've launched this page. " + this.mortalCharacters().length + " are characters from Mortal")
      }
    })

    effect(() => {
      console.log("There are currently ", this.characterList().length, "Characters in the list")
    })
  }

  private characters = signal<Character[]>([
    {
      id: 1,
      name: 'Vaelysong',
      levelCap: true,
      class: 'Warrior',
      level: 90,
      race: 'Void Elf',
      gearQuality: 286,
      game: 'World of Warcraft',
    },

    {
      id: 2,
      name: 'Aelithiria',
      race: 'Alvarin',
      class: 'Dex Footie',
      gearQuality: 'Pansar Carapace',
      game: 'Mortal Online II',
    },

    {
      id: 3,
      name: 'Keliza',
      race: 'Alvarin',
      class: 'Hybrid',
      gearQuality: 'Plate',
      game: 'Mortal Online II',
    },

    {
      id: 4,
      name: 'Keliza',
      race: 'Draenei',
      class: 'Paladin',
      levelCap: false,
      level: 81,
      gearQuality: 90,
      game: 'World of Warcraft',
    },

    {
      id: 5,
      name: 'Aelithiria',
      race: 'Void Elf',
      class: 'Mage',
      levelCap: true,
      level: 90,
      gearQuality: 248,
      game: 'World of Warcraft',
    },
    {
      id: 6,
      name: 'Kitiza',
      race: 'Void Elf',
      class: 'Priest',
      levelCap: false,
      level: 86,
      gearQuality: 126,
      game: 'World of Warcraft',
    },
  ]);

  characterList = this.characters.asReadonly();

  mortalCharacters = computed(() =>
    this.characterList().filter(c => c.game === "Mortal Online II")
  )

  nonMaxLevelCharacters = computed(()=>
    this.characterList().filter(c => !c.levelCap)
  )

  nonMaxLevelWarcraftCharacters = computed (() =>
  this.nonMaxLevelCharacters().filter(c => c.game === "World of Warcraft")
  )

  addCharacter(c: Character){
    this.characters.update(characterList => [...characterList, c]);
  }

  removeCharacter(id: number){
    this.characters.update(characterList => characterList.filter(i => i.id !== id))
  }
}
