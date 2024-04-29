import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

interface Link {
  nome: string;
  rota: string;
}

@Component({
  selector: 'app-config-nav',
  standalone: true,
  imports: [MatSidenavModule, MatListModule, MatIconModule, RouterModule, MatMenuModule],
  templateUrl: './config-nav.component.html',
  styleUrl: './config-nav.component.css'
})
export class ConfigNavComponent implements OnInit{

  links: Link[] = [
    { nome: "marca", rota: "marca"},
  ]

  constructor(private router: Router, private authService: AuthService){

  }
  
  ngOnInit(): void {
    this.router.navigate(['marca'])
  }
}
