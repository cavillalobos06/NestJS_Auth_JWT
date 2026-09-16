var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
let UserDao = class UserDao {
    typeOrmRepository;
    constructor(typeOrmRepository) {
        this.typeOrmRepository = typeOrmRepository;
    }
    async saveUser(createUserDto) {
        const user = this.typeOrmRepository.create(createUserDto);
        return await this.typeOrmRepository.save(user);
    }
    async findAll() {
        return await this.typeOrmRepository.find();
    }
    async findByEmail(email) {
        return await this.typeOrmRepository.findOne({ where: { email } });
    }
    async findById(id) {
        return await this.typeOrmRepository.findOne({ where: { id } });
    }
    async updateUser(id, updateData) {
        await this.typeOrmRepository.update(id, updateData);
    }
    async delete(id) {
        await this.typeOrmRepository.delete(id);
    }
};
UserDao = __decorate([
    Injectable(),
    __param(0, InjectRepository(User)),
    __metadata("design:paramtypes", [Repository])
], UserDao);
export { UserDao };
//# sourceMappingURL=user.dao.js.map