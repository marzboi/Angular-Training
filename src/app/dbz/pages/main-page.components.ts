import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/charaters.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  public characters: Character[] = [
    { name: 'Ron', power: 1000 },
    { name: 'Todd', power: 900 },
    { name: 'Mike', power: 9999 },
  ];

  onNewCharacter(character: Character): void {
    console.log(character);
    const characterToAdd = { ...character };
    this.characters.push(characterToAdd);
  }
}
