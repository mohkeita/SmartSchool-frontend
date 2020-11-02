import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eleves',
  templateUrl: './eleves.component.html',
  styleUrls: ['./eleves.component.css']
})
export class ElevesComponent implements OnInit {

  public titre = 'Elèves';
  public eleveSelected: string;

  public eleves = [
    { id: 1, firstname: 'Marta', lastname: 'Kent', phone: 33225555 },
    { id: 2, firstname: 'Paula', lastname: 'Isabela', phone: 3354288 },
    { id: 3, firstname: 'Laura', lastname: 'Antonia', phone: 55668899 },
    { id: 4, firstname: 'Luiza', lastname: 'Maria', phone: 6565659 },
    { id: 5, firstname: 'Lucas', lastname: 'Machado', phone: 565685415 },
    { id: 6, firstname: 'Pedro', lastname: 'Alvares', phone: 456454545 },
    { id: 7, firstname: 'Paulo', lastname: 'José', phone: 9874512 }
  ];

  eleveSelect(eleve: any) {
    this.eleveSelected = eleve.firstname;
  }

  retour() {
    this.eleveSelected = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
