import {Component, OnInit, TemplateRef} from '@angular/core';
import {Enseignant} from '../models/Enseignant';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-enseignants',
  templateUrl: './enseignants.component.html',
  styleUrls: ['./enseignants.component.css']
})
export class EnseignantsComponent implements OnInit {
  public titre = 'Enseignants';
  public profSelected: Enseignant;
  public modalRef: BsModalRef;

  public enseignats = [
    {id: 1, firstname: 'Lauro', subject: 'mathematique'},
    {id: 2, firstname: 'Roberto', subject: 'physique'},
    {id: 3, firstname: 'Ronaldo', subject: 'francais'},
    {id: 4, firstname: 'Rodrigo', subject: 'anglais'},
    {id: 5, firstname: 'Alexandre', subject: 'programmation'}
  ];

  profSelect(prof: Enseignant) {
    this.profSelected = prof;
  }

  retour() {
    this.profSelected = null;
  }

  constructor(private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
  }

}
