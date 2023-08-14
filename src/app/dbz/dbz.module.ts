import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.components';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { TestComponentComponent } from './components/test-component/test-component.component';

@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent,
    TestComponentComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [MainPageComponent],
})
export class DbzModule {}
