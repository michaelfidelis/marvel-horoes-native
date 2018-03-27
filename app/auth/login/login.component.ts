import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../core/model';
import { AuthService } from '../../core';
import { Page } from "ui/page";
import { alert, prompt } from 'ui/dialogs';

@Component({
  selector: 'app-login',
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario;

  constructor(private router: Router, private authService: AuthService, private page: Page) {
  }
  
  ngOnInit() {
    this.page.actionBarHidden = true;
    this.usuario = new Usuario();
  }

  public login() {
    let usuarioLogado = this.authService.login(this.usuario.email, this.usuario.senha);
    
    if (usuarioLogado) {
      this.router.navigate(['/quadrinhos']);
    } else {
      alert({
        title: 'Quadrinhos',
        okButtonText: 'OK',
        message: 'E-mail/Senha inválidos!!'
    });
    }
  }

  public cadastro() {
    this.router.navigate(['/auth/cadastro']);    
  }
}
