import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enseignants',
  templateUrl: './enseignants.component.html',
  styleUrls: ['./enseignants.component.css']
})
export class EnseignantsComponent implements OnInit {
  titre = 'Enseignants';

  public enseignats = [
    {nom: 'Lauro' },
    {nom: 'Roberto' },
    {nom: 'Ronaldo' },
    {nom: 'Rodrigo' },
    {nom: 'Alexandre' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
