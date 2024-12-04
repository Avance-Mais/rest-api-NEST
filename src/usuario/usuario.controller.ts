import { Body, Controller, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioDto } from 'src/Dto/usuario.dto';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async criar(@Body() data: UsuarioDto) {
    return this.usuarioService.criarUsuario(data);
  }
}
