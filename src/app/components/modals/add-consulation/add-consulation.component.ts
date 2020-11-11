import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth-service/auth.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

@Component({
  selector: 'app-add-consulation',
  templateUrl: './add-consulation.component.html',
  styleUrls: ['./add-consulation.component.scss'],
})
export class AddConsulationComponent implements OnInit {
  formConsulation: FormGroup;
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;
  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];
  patient;
  medecin;
  cons;
  constructor(private formBuilder:FormBuilder,private authSer:AuthService,private modalCrtl:ModalController,private nvParam:NavParams) {

    this.patient=this.nvParam.get("patient");
    this.medecin=this.nvParam.get("medecin");
    this.cons=this.nvParam.get("cons");
    this.formConsulation=this.formBuilder.group({
      idCons:[this.cons?this.cons.id:''],
      nomTraitement:[this.cons?this.cons.traitement.nom:'',Validators.required],
      traitements:this.formBuilder.array(this.cons?this.cons.traitement.contenu:[]),
      rapporte:[this.cons?this.cons.rapporte:'',Validators.required],
      medecin:[this.medecin,Validators.required],
      patient:[this.patient,Validators.required]
    })
  }

  ngOnInit() {}
  onSubmit() {

    this.authSer.saveConsulation(this.formConsulation.value).subscribe(data => {
      this.modalCrtl.dismiss();
    })

  }
  getTraitements(){
    return this.formConsulation.get('traitements') as FormArray
  }
  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add our requirement
    if ((value || '').trim()) {
      const antecedentsFamiliaux = this.formConsulation.get('traitements') as FormArray;
      antecedentsFamiliaux.push(this.formBuilder.control(value.trim()));
    }
    if (input) {
      input.value = '';
    }
  }

  remove(index: number): void {
    const antecedentsFamiliaux = this.formConsulation.get('traitements') as FormArray;

    if (index >= 0) {
      antecedentsFamiliaux.removeAt(index);
    }
  }

  onNoClick() {
    this.modalCrtl.dismiss();

  }

  dimissModal() {
    this.modalCrtl.dismiss();
  }
}
