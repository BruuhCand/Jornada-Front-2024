import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MarcaCreateComponent } from './components/marca/marca-create/marca-create.component';
import { MarcaTableComponent } from './components/marca/marca-table/marca-table.component';
import { NavHomeComponent } from './components/nav-home/nav-home.component';
import { Component } from '@angular/core';
import { Permissions } from './auth/auth.guard';


export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'marca', component: MarcaTableComponent},
    {path: 'create', component: MarcaCreateComponent},
    {path: '', component: NavHomeComponent, canActivate:[Permissions], children:[
        {path: 'home', component: HomeComponent },
    ]},
    
];
