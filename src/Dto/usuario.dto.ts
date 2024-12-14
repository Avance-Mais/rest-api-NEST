export class UsuarioDto{
    nome: string
    email: string
    senha: string
    biografia?: string
    tipo: string
}

export class ValidarDto {
    email: string
    senha: string
}