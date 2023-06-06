import { Module } from '@nestjs/common';
import { UserController } from 'src/user/user.controller';
import { UserService } from 'src/user/user.service';

@Module({
    imports: [
    ],
    providers: [
        UserService
    ],
    controllers: [
        UserController
    ],
    exports: [
    ]
})
export class SharedModule {}
