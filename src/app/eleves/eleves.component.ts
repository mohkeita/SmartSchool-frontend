import {Component, OnInit, TemplateRef} from '@angular/core';
import {Eleve} from '../models/Eleve';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-eleves',
  templateUrl: './eleves.component.html',
  styleUrls: ['./eleves.component.css']
})
export class ElevesComponent implements OnInit {

  public modalRef: BsModalRef;
  public eleveForm: FormGroup;
  public titre = 'Elèves';
  public eleveSelected: Eleve;
  public textSimple: string;

  public eleves = [
    { id: 1, firstname: 'Marta', lastname: 'Kent', phone: 33225555 },
    { id: 2, firstname: 'Paula', lastname: 'Isabela', phone: 3354288 },
    { id: 3, firstname: 'Laura', lastname: 'Antonia', phone: 55668899 },
    { id: 4, firstname: 'Luiza', lastname: 'Maria', phone: 6565659 },
    { id: 5, firstname: 'Lucas', lastname: 'Machado', phone: 565685415 },
    { id: 6, firstname: 'Pedro', lastname: 'Alvares', phone: 456454545 },
    { id: 7, firstname: 'Paulo', lastname: 'José', phone: 9874512 }
  ];

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder,
              private modalService: BsModalService) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.eleveForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  eleveSubmit() {
    console.log(this.eleveForm.value);
  }

  eleveSelect(eleve: Eleve) {
    this.eleveSelected = eleve;
    this.eleveForm.patchValue(eleve);
  }

  retour() {
    this.eleveSelected = null;
  }


}
