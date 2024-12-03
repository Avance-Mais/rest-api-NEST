import { Injectable } from '@nestjs/common';

@Injectable()
export class StatusService {
  obterStatus() {
    return {
      status: 'OK',
      code: 200,
      api: 'RestApi Avance+',
      mensagem: 'API funcionando corretamente!',
      versao: '1.0.0',
      ambiente: 'Desenvolvimento',
    };
  }
}
