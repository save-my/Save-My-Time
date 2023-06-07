import { Module } from '@nestjs/common';
import { GetHelloMapper } from './application/mapper/GetHelloMapper';
import { GetHelloUseCase } from './application/usesCases/GetHelloUseCase';
import { UserController } from './user.controller';

@Module({
    providers: [
        GetHelloMapper,
        GetHelloUseCase
    ],
    controllers: [
        UserController
    ]
})
export class UserModule {}
