import { UsersService } from '../users/users.service.js';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto.js';
import { LoginDto } from './dto/login.dto.js';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    Register(registerDto: RegisterDto): Promise<{
        id: number;
        name: string;
        role: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        products: import("../products/entities/product.entity.js").Product[];
    }>;
    login(loginDto: LoginDto): Promise<{
        acces_token: string;
        user: {
            id: number;
            name: string;
            email: string;
        };
    }>;
}
