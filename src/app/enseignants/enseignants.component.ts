import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enseignants',
  templateUrl: './enseignants.component.html',
  styleUrls: ['./enseignants.component.css']
})
export class EnseignantsComponent implements OnInit {
  titre = 'Enseignants';
  public profSelected: string;

  public enseignats = [
    {id: 1, firstname: 'Lauro', subject: 'mathematique'},
    {id: 2, firstname: 'Roberto', subject: 'physique'},
    {id: 3, firstname: 'Ronaldo', subject: 'francais'},
    {id: 4, firstname: 'Rodrigo', subject: 'anglais'},
    {id: 5, firstname: 'Alexandre', subject: 'programmation'}
  ];

  profSelect(prof: any) {
    this.profSelected = prof.firstname;
  }

  retour() {
    this.profSelected = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
