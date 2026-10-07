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
  dataSource = this.characterService.apiUrl;
  characterList = this.characterService.characterList;
  nonMaxChars = this.characterService.nonMaxLevelCharacters;
  nonMaxWoW = this.characterService.nonMaxLevelWarcraftCharacters;
  onCharacterClicked(event: ContentEvent): void {
    console.log(event);
    this.characterService.removeCharacter(event.id)
  }
}
