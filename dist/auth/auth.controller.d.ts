import { AuthService } from './auth.service.js';
import { RegisterDto } from './dto/register.dto.js';
import { LoginDto } from './dto/login.dto.js';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<{
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
