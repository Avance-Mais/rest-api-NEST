import { Module } from '@nestjs/common';
import { StatusModule } from './status/status.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsuarioModule } from './usuario/usuario.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [StatusModule, PrismaModule, UsuarioModule, PostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
