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


}
