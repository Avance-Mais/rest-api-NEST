import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioDto } from 'src/Dto/usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(private readonly prisma: PrismaService) {}

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
