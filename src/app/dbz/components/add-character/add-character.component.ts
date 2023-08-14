import { Component, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/charaters.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: [],
})
export class AddCharacterComponent {
  onNewCjaracter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    console.log(this.character);

    this.character.name = '';
    this.character.power = 0;
  }
}
