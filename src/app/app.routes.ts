import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MarcaCreateComponent } from './components/marca/marca-create/marca-create.component';
import { MarcaTableComponent } from './components/marca/marca-table/marca-table.component';
import { NavHomeComponent } from './components/nav-home/nav-home.component';
import { Component } from '@angular/core';
import {  authGuard } from './auth/auth.guard';
import { ConfigNavComponent } from './components/config-nav/config-nav.component';


export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    
    {path: '', component: NavHomeComponent, canActivate:[authGuard], children:[
        {path: 'home', component: HomeComponent },
    ]},
    {path: 'config', component: ConfigNavComponent, canActivate:[authGuard], children:[
        {path: 'marca', component: MarcaTableComponent},
        {path: 'marca/  create', component: MarcaCreateComponent},
    ]}
    
];
