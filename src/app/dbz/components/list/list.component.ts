import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/charaters.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() public characterList: Character[] = [];
}
