export class Usuario {

  public nome: string;
  public email: string;
  public senha: string;
  public criado?: number = Date.now();
}
