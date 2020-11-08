import {Component, OnInit, TemplateRef} from '@angular/core';
import {Eleve} from '../models/Eleve';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {EleveService} from './eleve.service';

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

  public eleves: Eleve[];

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder,
              private modalService: BsModalService,
              private eleveService: EleveService) {
    this.createForm();
  }

  ngOnInit(): void {
    this.initEleves();
  }

  initEleves() {
    this.eleveService.getAll().subscribe(
      (eleves: Eleve[]) => {
        this.eleves = eleves;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  createForm() {
    this.eleveForm = this.fb.group({
      id: [''],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  saveEleve(eleve: Eleve) {
    this.eleveService.put(eleve.id, eleve).subscribe(
      (retourne: Eleve) => {
        console.log(retourne);
        this.initEleves();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  eleveSubmit() {
    this.saveEleve(this.eleveForm.value);
  }

  eleveSelect(eleve: Eleve) {
    this.eleveSelected = eleve;
    this.eleveForm.patchValue(eleve);
  }

  retour() {
    this.eleveSelected = null;
  }


}
