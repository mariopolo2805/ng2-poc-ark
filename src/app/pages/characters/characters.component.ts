import { CharactersService } from './characters.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
  public characterList: any[] = [];

  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.charactersService.getCharacters().subscribe((data: any) => {
      this.characterList = data.results;
    });
  }
}
