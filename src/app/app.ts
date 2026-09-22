import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterList } from './Components/character-list/character-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CharacterList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Nickolas_DAlimonte_learning_AngularF26');
}
