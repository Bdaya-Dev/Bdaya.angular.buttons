import { Component, OnInit } from '@angular/core';
import { faTwitter} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'bdaya-circular-button',
  template: `
  	<a class="sns-btn sns-btn--twitter">
    <fa-icon class="sns-btn__icon" [icon]="faTwitter"></fa-icon>
     	</a>	
  `,
  styleUrls: [
    './circular-buttons.component.scss'
  ]
})
export class CircularButtonsComponent implements OnInit {
  faTwitter = faTwitter;
  constructor() { }

  ngOnInit(): void {
  }

}
