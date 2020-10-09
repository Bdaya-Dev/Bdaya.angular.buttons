import { Component, Input, OnInit } from '@angular/core';
import { faTwitter , faFacebook, faGithub,  fa} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'bdaya-circular-button',
  template: `
  	<a class="sns-btn sns-btn">
    <fa-icon class="sns-btn__icon" [icon]="fa"></fa-icon>
     	</a>
  `,
  styleUrls: [
    './circular-buttons.component.scss'
  ]
})
export class CircularButtonsComponent implements OnInit {

  @Input() color =  '#ffffff';
  @Input() fa = faTwitter;
  constructor() { }

  ngOnInit(): void {
  }

}
