import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../core/model';
import { AuthService } from '../../core';
import { Page } from 'ui/page';
import { alert, prompt } from 'ui/dialogs';

@Component({
    selector: 'app-cadastro',
    moduleId: module.id,
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
    public usuario: Usuario;

    constructor(private router: Router, private authService: AuthService, private page: Page) {}

    ngOnInit() {
        this.usuario = new Usuario();
        this.page.actionBarHidden = true;
    }

    cadastrar() {

        if (!this.camposValidos()) return;

        this.authService.signup(this.usuario.nome, this.usuario.email, this.usuario.senha).subscribe(
            (usuarioCadastrado) => {
                alert({
                    title: 'Quadrinhos',
                    okButtonText: 'OK',
                    message: 'Usuário cadastrado com sucesso!'
                });
                this.router.navigate(['/auth']);
            },
            (errorResponse) => {
                alert({
                    title: 'Quadrinhos',    
                    okButtonText: 'OK',
                    message: errorResponse
                });
            }
        );
    }

    private camposValidos(): boolean {
        if (this.usuario.nome == undefined || this.usuario.nome == '') {
            alert({
                title: 'Quadrinhos',
                okButtonText: 'OK',
                message: `Preencha o nome do usuário!`
            });
            return false;
        } else if (this.usuario.email == undefined || this.usuario.email == '') {
            alert({
                title: 'Quadrinhos',
                okButtonText: 'OK',
                message: `Preencha o e-mail do usuário!`
            });
            return false;
        } else if (this.usuario.senha == undefined || this.usuario.senha == '') {
            alert({
                title: 'Quadrinhos',
                okButtonText: 'OK',
                message: `Preencha a senha do usuário!`
            });
            return false;
        }

        return true;
    }
    voltar() {
        this.router.navigate(['/auth']);
    }
}
