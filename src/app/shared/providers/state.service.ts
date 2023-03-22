import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public state: 'off' | 'neutral' | 'on' = 'neutral';

  constructor() { }
}
