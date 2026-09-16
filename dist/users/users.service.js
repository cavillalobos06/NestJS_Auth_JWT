var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ConflictException, Injectable, NotFoundException, } from '@nestjs/common';
import { UserDao } from './dao/user.dao.js';
import bcryptjs from 'bcryptjs';
let UsersService = class UsersService {
    userDao;
    constructor(userDao) {
        this.userDao = userDao;
    }
    async create(createUserDto) {
        const userExists = await this.userDao.findByEmail(createUserDto.email);
        if (userExists) {
            throw new ConflictException('El correo ya se encuentra registrado');
        }
        const hashedPassword = await bcryptjs.hash(createUserDto.password, 10);
        return await this.userDao.saveUser({
            ...createUserDto,
            password: hashedPassword,
        });
    }
    async findAll() {
        return await this.userDao.findAll();
    }
    async findByEmail(email) {
        const user = await this.userDao.findByEmail(email);
        if (!user) {
            throw new NotFoundException('El usuario no existe');
        }
        return user;
    }
    async findById(id) {
        const user = await this.userDao.findById(id);
        if (!user) {
            throw new NotFoundException(`El usuario con el id:${id} no se encuentra registrado`);
        }
        return user;
    }
    async update(id, updateUserDto) {
        const user = await this.userDao.findById(id);
        if (!user) {
            throw new NotFoundException(`El usuario con el id:${id} no existe`);
        }
        if (updateUserDto.password) {
            updateUserDto.password = await bcryptjs.hash(updateUserDto.password, 10);
        }
        await this.userDao.updateUser(id, updateUserDto);
        return await this.findById(id);
    }
    async delete(id) {
        await this.userDao.delete(id);
    }
};
UsersService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [UserDao])
], UsersService);
export { UsersService };
//# sourceMappingURL=users.service.js.map