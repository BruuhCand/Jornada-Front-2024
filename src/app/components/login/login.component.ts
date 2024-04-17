import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { Credenciais } from '../../models/credenciais';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  creds: Credenciais = {
    email: '',
    senha: ''
  }
  
  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));


  constructor(private toast: ToastrService){ }

  logar(){
    console.log(this.creds.email)
  
  }

  validaCampos(): boolean{
    return this.email.valid && this.senha.valid
  }
}