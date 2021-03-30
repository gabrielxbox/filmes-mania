import { ValidarCamposService } from './../validar-campos.service';
import { Component, Input} from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-nuber',
  templateUrl: './input-nuber.component.html',
  styleUrls: ['./input-nuber.component.scss']
})
export class InputNuberComponent {

  @Input() titulo: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  @Input() minimo = 0;
  @Input() maximo = 10;
  @Input() step = 1;



  constructor(public validacao: ValidarCamposService) { }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}
