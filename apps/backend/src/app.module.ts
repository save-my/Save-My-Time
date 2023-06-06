import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { LoggerModule } from 'nestjs-pino';
import { ConfigModule, ConfigService, registerAs } from '@nestjs/config';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [registerAs('app', () => ({ projectName: 'SaveMyTime' }))],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'frontend/dist'),
    }),
    LoggerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        return {
          pinoHttp: [
            {
              name: config.get('app').projectName,
              level: (() => {
                const logLevel = {
                  production: 'info',
                  development: 'debug',
                  test: 'error',
                };
                return logLevel[process.env.NODE_ENV] || 'info';
              })(),
              customSuccessMessage: (req, res) => {
                return `- HTTP ${req.method} - ${req.url} | ${res.statusCode} ${res.statusMessage}`;
              },
              customErrorMessage: (req, res, err) => {
                return `- HTTP ${req.method} - ${req.url} | ${res.statusCode} ${res.statusMessage} | ${err.message}`;
              },
              transport: {
                target: 'pino-pretty',
                options: {
                  colorize: true,
                  sync: true,
                  translateTime: true,
                  messageFormat: '- {context} {msg}',
                  ignore: 'pid,hostname,context,req,res',
                  singleLine: true,
                  errorLikeObjectKeys: ['err', 'error'],
                },
              },
              renameContext: 'scope',
            } as any,
          ] as any,
        };
      },
    }),
    SharedModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
