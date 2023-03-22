import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {
  @Input() state: 'off' | 'neutral' | 'on' = 'neutral';
  @Output() stateChange = new EventEmitter<'off' | 'neutral' | 'on'>();

  constructor() { }

  handleChange(state: 'off' | 'neutral' | 'on'): void {
    this.state = state;
    this.stateChange.emit(this.state);
  }
}
