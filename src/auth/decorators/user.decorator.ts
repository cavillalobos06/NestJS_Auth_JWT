// src/auth/decorators/user.decorator.ts
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user; // Trae el usuario que el JwtAuthGuard inyectó en la petición

    // Si usas @GetUser('email'), te devuelve solo el correo. Si usas @GetUser(), te devuelve todo el objeto.
    return data ? user?.[data] : user;
  },
);
