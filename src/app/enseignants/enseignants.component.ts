import {Component, OnInit, TemplateRef} from '@angular/core';
import {Enseignant} from '../models/Enseignant';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {EnseignantService} from './enseignant.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Eleve} from '../models/Eleve';

@Component({
  selector: 'app-enseignants',
  templateUrl: './enseignants.component.html',
  styleUrls: ['./enseignants.component.css']
})
export class EnseignantsComponent implements OnInit {
  public titre = 'Enseignants';
  public profSelected: Enseignant;
  public teacherForm: FormGroup;
  public modalRef: BsModalRef;

  public enseignats: Enseignant[];


  retour() {
    this.profSelected = null;
  }

  constructor(private fb: FormBuilder,
              private modalService: BsModalService,
              private enseignatService: EnseignantService) {
    this.createForm();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
    this.initEnseignant();
  }

  createForm() {
    this.teacherForm = this.fb.group({
      id: [''],
      name: ['', Validators.required]
    });
  }

  saveTeacher(teacher: Enseignant) {
    this.enseignatService.put(teacher.id, teacher).subscribe(
      (retourne: Enseignant) => {
        console.log(retourne);
        this.initEnseignant();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  teacherSubmit() {
    this.saveTeacher(this.teacherForm.value);
  }

  teacherSelect(teacher: Enseignant) {
    this.profSelected = teacher;
    this.teacherForm.patchValue(teacher);

  }

  initEnseignant() {
    this.enseignatService.getAll().subscribe(
      (enseignats: Enseignant[]) => {
        this.enseignats = enseignats;
        console.log(enseignats);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
