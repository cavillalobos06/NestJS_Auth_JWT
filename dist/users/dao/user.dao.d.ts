import { User } from '../entities/user.entity.js';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto.js';
export declare class UserDao {
    private readonly typeOrmRepository;
    constructor(typeOrmRepository: Repository<User>);
    saveUser(createUserDto: CreateUserDto): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
    findById(id: number): Promise<User | null>;
    updateUser(id: number, updateData: Partial<User>): Promise<void>;
}
