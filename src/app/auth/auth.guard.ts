import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class Permissions implements CanActivate{

  constructor(private authService: AuthService, private router: Router){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
   let authenticated = this.authService.isAuthenticated();

   if(authenticated){
    return true;
   }
   else{
    this.router.navigate(['login'])
    return false
   }
  }

}
export const authGuard: CanActivateFn = (route, state) => {
   
  return false;
};


