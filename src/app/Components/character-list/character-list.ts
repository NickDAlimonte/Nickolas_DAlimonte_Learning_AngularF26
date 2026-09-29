import { Component, inject } from '@angular/core';
import { CharacterListItem } from '../character-list-item/character-list-item';
import { ContentEvent } from '../../shared/models/content-event';
import { CharacterListService} from '../../services/character-list-service';

@Component({
  selector: 'app-character-list',
  imports: [CharacterListItem],
  templateUrl: './character-list.html',
  styleUrl: './character-list.scss',
})
export class CharacterList {

  private characterService = inject(CharacterListService)
  characterList = this.characterService.characterList;
  onCharacterClicked(event: ContentEvent): void {
    console.log(event);
  }
}
