import { CreateUserDto } from './dto/create-user.dto.js';
import { UserDao } from './dao/user.dao.js';
import { User } from './entities/user.entity.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
export declare class UsersService {
    private readonly userDao;
    constructor(userDao: UserDao);
    create(createUserDto: CreateUserDto): Promise<User>;
    findByEmail(email: string): Promise<User>;
    findById(id: number): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<User>;
}
