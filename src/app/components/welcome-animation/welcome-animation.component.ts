import { Component, OnInit } from '@angular/core';
import { faHandPointUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-welcome-animation',
  templateUrl: './welcome-animation.component.html',
  styleUrls: ['./welcome-animation.component.css']
})
export class WelcomeAnimationComponent implements OnInit{

  faPointing = faHandPointUp;
  constructor(){}
  ngOnInit(){}
}
