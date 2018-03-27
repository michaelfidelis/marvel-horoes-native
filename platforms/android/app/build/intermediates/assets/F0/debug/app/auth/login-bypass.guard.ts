import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './../core/';

@Injectable()
export class LoginBypassRouteGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){

  }

  canActivate(){
    let isLogado = this.authService.obterUsuarioLogado() != undefined;

    if (isLogado) {
      this.router.navigate(['/items']);
    }

    return isLogado;
  }
}
