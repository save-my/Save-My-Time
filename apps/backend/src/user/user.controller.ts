import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { PinoLogger, InjectPinoLogger } from 'nestjs-pino';

@Controller()
export class UserController {
  constructor(private readonly appService: UserService) { }

  @Get()
  getHello(): void {
  }
}
