import { Controller, Get } from '@nestjs/common';
import { PinoLogger, InjectPinoLogger } from 'nestjs-pino';
import { IGetAHello } from './domain/getHelloDto';
import { GetHelloUseCase } from './application/usesCases/GetHelloUseCase';

@Controller('user')
export class UserController {
  constructor(
    private getHelloUseCase: GetHelloUseCase
  ) { }

  @Get('temp')
  getHello() {
    return this.getHelloUseCase.execute();
  }
}
