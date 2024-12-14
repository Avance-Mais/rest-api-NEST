import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioDto, ValidarDto } from 'src/Dto/usuario.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsuarioService {
  constructor(private readonly prisma: PrismaService) {}

  async autenticacao(data: ValidarDto) {
    let dadosValidacao = await this.prisma.usuario.findMany({
      where: {
        email: data.email,
        senha: data.senha,
      },
    });

    if (dadosValidacao.length === 0) {
      return JSON.stringify({
        status: 404,
        mensagem: 'E-mail ou senha inválidos',
        dados: null,
      });
    } else {
      const tokenUnico = uuidv4();
      return JSON.stringify({
        status: 200,
        mensagem: 'Autenticação bem-sucedida',
        dados: {
          token: tokenUnico,
          usuario: dadosValidacao
        },
      });
    }
  }

  async criarUsuario(data: UsuarioDto) {
    return this.prisma.usuario.create({
      data: {
        nome: data.nome,
        email: data.email,
        senha: data.senha,
        biografia: data.biografia || '',
        tipo: data.tipo || 'Aluno',
      },
    });
  }
}
