import { Component, signal } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { Credenciais } from '../../models/credenciais';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

interface MessageResponse{
  data: TokenResponse,
  status: number,
  title: string,
  message: string,
  validationErrors: string
}

interface TokenResponse{
  token: string
}


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  creds: Credenciais = {
    email: '',
    senha: ''
  }
  
  formLogar: FormGroup;
  loading = signal(false)
  
  constructor(private toast: ToastrService,
    private service: AuthService
  ){

    //inicialização do form group
    this.formLogar = new FormGroup({
      email: new FormControl('', [Validators.email]),
      senha: new FormControl('', [Validators.minLength(3)])
    });
  }

  logar(){
    console.log(this.formLogar.value)
    this.creds.email = this.formLogar.value.email
    this.creds.senha = this.formLogar.value.senha

    this.loading.set(true)
    this.service.authenticate(this.creds).subscribe({
     
      next: (valor: MessageResponse) =>{
        this.toast.success(valor.data.token)
        this.loading.set(false)
      },
      error: (valorErro: MessageResponse) =>{
        this.toast.error(valorErro.message)
      }
    })

  }


}