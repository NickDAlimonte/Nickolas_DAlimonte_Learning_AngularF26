import { Component, input, output } from '@angular/core';
import { Character } from '../../shared/models/character';
import { ContentEvent } from '../../shared/models/content-event'
import { createStructuredContentOutput } from '@angular/cli/src/commands/mcp/utils';

@Component({
  selector: 'app-character-list-item',
  imports: [],
  templateUrl: './character-list-item.html',
  styleUrl: './character-list-item.scss',
})
export class CharacterListItem {
  character = input.required<Character>();
  clicked = output<ContentEvent>();

  toggle(): void{
    this.clicked.emit({
      id: this.character().id,
      action: 'clicked'
    });

  }
}
