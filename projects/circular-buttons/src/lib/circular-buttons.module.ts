import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CircularButtonsComponent } from './circular-buttons.component';



@NgModule({
  declarations: [CircularButtonsComponent],
  imports: [
    FontAwesomeModule
  ],
  exports: [CircularButtonsComponent]
})
export class CircularButtonsModule { }
