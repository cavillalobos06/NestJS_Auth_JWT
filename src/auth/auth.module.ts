import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller.js';
import { AuthService } from './auth.service.js';
import { UsersModule } from '../users/users.module.js';

@Module({
  imports: [UsersModule, JwtModule.registerAsync({
    global: true,
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
      secret: configService.get<string>('JWT_SECRET'),
      signOptions: {expiresIn: '1d'},
    }),
    inject: [ConfigService]
  })],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
