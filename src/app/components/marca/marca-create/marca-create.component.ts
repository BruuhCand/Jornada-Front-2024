import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MarcaInterface } from '../../../models/marca';
import { AuthService } from '../../../services/auth.service';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-marca-create',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, NgxMaskDirective, NgxMaskPipe, RouterModule],
  providers: [AuthService, provideNgxMask()],
  templateUrl: './marca-create.component.html',
  styleUrl: './marca-create.component.css'
})
export class MarcaCreateComponent {

formMarca: FormGroup;

marcas: MarcaInterface = {
  id: 0,
  nome: '',
  cnpj: '',
  telefone: '',
  celular: '',
  email: '',
  senha: ''
}

constructor(private service: AuthService){
  this.formMarca = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    cnpj: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    senha: new FormControl('', [Validators.required]),
    telefone: new FormControl ('', [Validators.required]),
    celular: new FormControl('')
  });
}

logar(){
  console.log(this.formMarca.value);
  this.formMarca.controls['nome'].setValue('')
}

}
