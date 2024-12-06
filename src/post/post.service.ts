import { Injectable } from '@nestjs/common';
import { PostDto } from 'src/Dto/post.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}
  obterPosts() {
    return this.prisma.post.findMany();
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
