import { Module } from '@nestjs/common';
import { StatusModule } from './status/status.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [StatusModule, PrismaModule, UsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
