import { Component } from '@angular/core';
import { StateService } from 'src/app/shared/providers/state.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  constructor(public stateService: StateService) { }

  handleStateChange(state: 'on' | 'neutral' | 'off') {
    this.stateService.state = state;
  }
}
