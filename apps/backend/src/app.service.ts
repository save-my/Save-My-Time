import { Injectable } from '@nestjs/common';
import { LoggerResolver } from './shared/helpers/console-helper/application/ConsoleInfo.implementation';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

@Injectable()
export class AppService {
  constructor(@InjectPinoLogger(AppService.name) private logger: PinoLogger) { }

  getHello(): string {
    LoggerResolver(this.logger).info("Hola");
    return 'Hello World!';
  }
}
