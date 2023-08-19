import { Injectable } from '@angular/core';
import { Character } from '../interfaces/charaters.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  constructor() {}

  public characters: Character[] = [
    { id: uuid(), name: 'Ron', power: 1000 },
    { id: uuid(), name: 'Todd', power: 900 },
    { id: uuid(), name: 'Mike', power: 9999 },
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      ...character,
    };
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
