import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../material/material.module';

import { InputSelectComponent } from './input-select/input-select.component';
import { InputDateComponent } from './input-date/input-date.component';
import { InputTextareaComponent } from './input-textarea/input-textarea.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputNuberComponent } from './input-nuber/input-nuber.component';

@NgModule({

  declarations:[

    InputTextComponent,
    InputTextareaComponent,
    InputDateComponent,
    InputSelectComponent,
    InputNuberComponent

  ],

  imports:[

    CommonModule, // para reconhecer as fariavel do angula no front
    MaterialModule,
    ReactiveFormsModule,
    FormsModule

  ],

  exports: [

    InputTextComponent,
    InputTextareaComponent,
    InputDateComponent,
    InputSelectComponent,
    InputNuberComponent


  ]
})
export class CamposModule {}
