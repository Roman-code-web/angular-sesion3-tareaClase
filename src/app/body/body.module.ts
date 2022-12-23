import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { CardsComponent } from './cards/cards.component';



@NgModule({
  declarations: [
    TitleComponent,
    CardsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TitleComponent,
    CardsComponent
  ]
})
export class BodyModule { }
