import { Component } from '@angular/core';
import { StateService } from 'src/app/shared/providers/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public stateService: StateService) { }

  handleStateChange(state: 'on' | 'neutral' | 'off') {
    this.stateService.state = state;
  }
}
