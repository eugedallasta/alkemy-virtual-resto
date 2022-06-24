import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  constructor(private router :Router) {}

  //Redirecciona al login si recibe false
  redirect(bool :boolean) {
    if(bool) {
      this.router.navigate(["login"]);
    }
  }
  //Si no se encuentra un token en el local storage redirecciona al login y retorna false
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = sessionStorage.getItem("token") === null;
    this.redirect(token);
    return !token;
  }

}
