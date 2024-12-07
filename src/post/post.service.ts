import { Injectable } from '@nestjs/common';
import { PostDto } from 'src/Dto/post.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}
  async obterPosts() {
    const idUsuarios = await this.prisma.post.findMany({
      select: {
        idUsuario: true,
      },
    });

    const ids = idUsuarios.map((item) => item.idUsuario);

    const usuarios = await this.prisma.usuario.findMany({
      where: {
        id: { in: ids },
      },
      select: {
        id: true,
        nome: true,
        email: true,
        biografia: true,
        tipo: true,
      },
    });

    const posts = await this.prisma.post.findMany({
      select: {
        titulo: true,
        descricao: true,
        tema: true,
        link: true,
      },
    });

    return { usuarios, posts };
  }

  criarPost(data: PostDto) {
    return this.prisma.post.create({
      data: {
        titulo: data.titulo,
        descricao: data.descricao,
        tema: data.tema,
        link: data.link,
        idUsuario: data.idUsuario,
      },
    });
  }
}
