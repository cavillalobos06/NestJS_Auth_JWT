import { UsersService } from './users.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("./entities/user.entity.js").User>;
    getAll(): Promise<import("./entities/user.entity.js").User[]>;
    getById(id: number): Promise<import("./entities/user.entity.js").User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import("./entities/user.entity.js").User>;
    delete(id: number): Promise<void>;
}
