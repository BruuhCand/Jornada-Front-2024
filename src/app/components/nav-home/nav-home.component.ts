import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';

interface Link {
  nome: string;
  rota: string;
}

@Component({
  selector: 'app-nav-home',
  standalone: true,
  imports: [MatButtonModule, MatCommonModule, CommonModule,  MatSidenavModule, MatListModule, MatIconModule, RouterModule, MatMenuModule],
  templateUrl: './nav-home.component.html',
  styleUrl: './nav-home.component.css'
})
export class NavHomeComponent implements OnInit {

  links: Link[] = [
    { nome: "home", rota: "home"},
  ]

  constructor(private router: Router){

  }

  ngOnInit(): void {
    this.router.navigate(['home'])
  }
}
