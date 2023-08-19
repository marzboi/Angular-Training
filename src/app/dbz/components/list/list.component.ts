import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/charaters.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() public characterList: Character[] = [];

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  emitDeleteCharacter(id?: string) {
    if (!id) return;
    this.onDelete.emit(id);
  }
}
