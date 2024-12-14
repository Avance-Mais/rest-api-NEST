import { Body, Controller, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioDto, ValidarDto } from 'src/Dto/usuario.dto';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post('/auth')
  async validar(@Body() data: ValidarDto) {
    return this.usuarioService.autenticacao(data)
  }

  @Post()
  async criar(@Body() data: UsuarioDto) {
    return this.usuarioService.criarUsuario(data);
  }
}
